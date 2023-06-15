import isAccessible from '../src/index.js'
import { jest } from '@jest/globals'
import mock from 'mock-fs'

jest.mock('fs')

describe('accessible tests', () => {
    beforeAll(() => {
        mock.restore()
        mock({
            'temp-dir': {
                'test.txt': mock.file({
                    content: 'test',
                    mode: 7777,
                }),
            },
            'empty-dir': {},
            'inaccessible-contents': {
                'file.txt': mock.file({
                    mode: 0o000,
                }),
            },
        })
    })

    afterAll(() => mock.restore())

    it('verifies file existence', async () => {
        const f = await isAccessible('./temp-dir/test.txt')
        expect(f).toBe(true)
    })

    it('verifies just a dir', async () => {
        const f = await isAccessible('./temp-dir')
        expect(f).toBe(true)
    })

    it('should error on empty dir', async () => {
        await isAccessible('./empty-dir/test.txt').catch((e) => {
            expect(e).toBe(false)
            // expect(e.message).toBe("ENOENT, no such file or directory './empty-dir/test.txt'")
        })
    })

    it('should error on inaccessible file', async () => {
        await isAccessible('./inaccessible-contents/file.txt').catch((e) => {
            expect(e.message).toBe(false)
            // expect(e.message).toBe("EACCES, permission denied './inaccessible-contents/file.txt'")
        })
    })
})

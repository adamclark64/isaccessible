import { jest } from '@jest/globals'
// const jest = require('@jest/globals')
// import jest from 'jest'
import mock from 'mock-fs'
import isAccessible from './index';

jest.mock('fs')

describe('accessible tests', () => {
    beforeAll(() => {
        jest.setTimeout(5 * 1000)

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
        await isAccessible('./empty-dir/test.txt').catch((e: any) => {
            expect(e).toBe(false)
            // expect(e.message).toBe("ENOENT, no such file or directory './empty-dir/test.txt'")
        })
    })

    it('should error on inaccessible file', async () => {
        await isAccessible('./inaccessible-contents/file.txt').catch((e: any) => {
            expect(e.message).toBe(false)
            // expect(e.message).toBe("EACCES, permission denied './inaccessible-contents/file.txt'")
        })
    })
})

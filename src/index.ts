import fs from 'node:fs'
import fsPromises from 'node:fs/promises'

interface Res {
    value: boolean,
    message?:string
}
const isAccessible = async (filePath: string): Promise<Res> => {
    return await fsPromises.access(filePath, fs.constants.X_OK).then(() => {
        return {value: true}
    }).catch((err) => {
        return {
            value: false,
            message: err
        }
    })
}

export default isAccessible;

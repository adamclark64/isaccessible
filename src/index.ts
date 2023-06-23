import fs from 'node:fs'
import fsPromises from 'node:fs/promises'

interface Res {
    value: boolean,
    message:string
}
export const isAccessible = async (filePath: string): Promise<Res | boolean> => {
    return await fsPromises.access(filePath, fs.constants.X_OK).then(() => {
        return true;
    }).catch((err) => {
        return {
            value: false,
            message: err
        }
    })
}

export default isAccessible;

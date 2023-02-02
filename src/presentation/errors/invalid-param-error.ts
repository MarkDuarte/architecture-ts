export class InvalidParamError extends Error {
  constructor (paramName: string) {
    super(`Imvalid param: ${paramName}`)
    this.name = 'InvalidParamError'
  }
}

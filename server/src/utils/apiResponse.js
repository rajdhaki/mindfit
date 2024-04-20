class apiResonse{
    constructor(statusCode, data, message = "Successe")
    {
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}

export {apiResonse}
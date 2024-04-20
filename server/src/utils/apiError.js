class apiError extends Error{
    constructor(
        statusCode,
        message = "Something Went Wrong",
        error = [],
        stacks = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.message = message
        this.data = null
        this.success = false
        this.error = error




    }

}

export {apiError}
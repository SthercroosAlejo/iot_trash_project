class Trash {
    constructor(id, isFull, isEmpty, isActived, isDeleted, createdAt, updatedAt) {
        this.id = id
        this.isFull = isFull
        this.isEmpty = isEmpty
        this.isActived = isActived
        this.isDeleted = isDeleted
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}

module.exports = Trash;
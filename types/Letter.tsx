export default class Letter {
    constructor(public id: string, public letter: string, public status: number) { }

    equals(other: any): Boolean {
        if (this === other) return true
        other as Letter
        if (this.id != other.id || this.letter != other.letter || this.status != other.status) return false
        return true
    }

    toString(): String {
        return ("\n{ id:${this.id} \n letter: ${this.letter} \n status: ${this.status} \n}\n");
    }
}

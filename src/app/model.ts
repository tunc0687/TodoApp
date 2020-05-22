export class Model {
    user: string;
    items: TodoItem[];
    constructor(){
        this.user = "Duygu";
        this.items = [
            new TodoItem("Spor Yapmak", false),
            new TodoItem("Araştırma Yapmak", true),
            new TodoItem("Kitap Okumak", false),
            new TodoItem("Dil Öğrenmek", false),
        ];
    }
}

export class TodoItem {
    description: string;
    action: boolean;
    constructor(description: string, action: boolean){
        this.description = description;
        this.action = action;
    }
}
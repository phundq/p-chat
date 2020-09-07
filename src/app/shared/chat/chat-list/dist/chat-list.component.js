"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ChatListComponent = void 0;
var core_1 = require("@angular/core");
var ChatListComponent = /** @class */ (function () {
    function ChatListComponent() {
        this.chatList = [
            {
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU",
                fullName: "Quốc Phú"
            },
            {
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU",
                fullName: "Quốc Phú 1"
            },
            {
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU",
                fullName: "Quốc Phú 2"
            },
            {
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU",
                fullName: "Quốc Phú 3"
            },
            {
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnKVKzjbASTv2fR09U_wghz4wfuXFzcXNEVw&usqp=CAU",
                fullName: "Quốc Phú 4"
            }
        ];
    }
    ChatListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], ChatListComponent.prototype, "chatList");
    ChatListComponent = __decorate([
        core_1.Component({
            selector: 'app-chat-list',
            templateUrl: './chat-list.component.html',
            styleUrls: ['./chat-list.component.scss']
        })
    ], ChatListComponent);
    return ChatListComponent;
}());
exports.ChatListComponent = ChatListComponent;

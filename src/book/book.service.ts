import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name)
        private bookModel: mongoose.Model<Book>
    ) { }
    
    async findAll(): Promise<Book[]> {
        const books = await this.bookModel.find()
        return books
    }

    async create(book: Book): Promise<Book> {
        const response = await this.bookModel.create(book);
        return response;
    }

    async findById(id: mongoose.ObjectId): Promise<Book> {
        const response = await this.bookModel.findOne({_id: id})
        if (!response) {
            throw new NotFoundException("Book not found")
        }
        return response;
    }
} 

import { Injectable, NotFoundException } from '@nestjs/common';
// import { BoardStatus } from './boards-status.enum';
// import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardRepository } from './board.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { BoardStatus } from './boards-status.enum';
//데이터베이스 접근

@Injectable()
export class BoardsService {
  constructor(
    //private 로 선언하면 다른 컴포넌트가 변경 하지 못하게 된다.
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}

  async getAllBoards(): Promise<Board[]> {
    return this.boardRepository.find();
  }

  //title은 title: title과 동일
  createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto);
  }

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Can't find board`);
    }
    return found;
  }

  async deleteBoard(id: number) {
    const result = await this.boardRepository.delete(id);
    console.log(typeof result);

    return result;
  }

  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.getBoardById(id);
    board.status = status;
    await this.boardRepository.save(board);

    return board;
  }
}

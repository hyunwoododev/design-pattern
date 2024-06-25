import SumStrategy from "../interface/SumStrategy";

export default class LoopSumStrategy implements SumStrategy{
    get(N: number): number {
        let sum = 0
        for(let i = 0; i<=N; i++){
            sum += i
        }
        return sum
    } 
}
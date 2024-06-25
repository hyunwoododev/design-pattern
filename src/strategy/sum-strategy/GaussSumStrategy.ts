import SumStrategy from "../interface/SumStrategy";

export default class GaussSumStrategy implements SumStrategy{
    get(N: number): number {
        return N * (N+1) / 2
    } 
}
export interface IntervalWinner {
  producer: string
  interval: number
  previousWin: number
  followingWin: number
}

export interface IntervalWinnerResponse {
  max: IntervalWinner[]
  min: IntervalWinner[]
}

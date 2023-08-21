export const ansoperation={
    answer:[],
    addans(ans){
        this.answer.push(ans)
        return ans
    },
    getans(){
        return this.answer
    }
}
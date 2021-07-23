/*
    비동기통신에 대한 내용을 넣는공간
*/

// List 가져오기
export const getComment = async (dispatch) => {
    dispatch({type:'GET_COMMENT'})
    try{
        console.log('getComment')
        const response = await fetch('http://api.jihwandevelopment.com/api/comment')
        const data = await response.json()
        
        const result = data.map(obj => { 
            return{ ...obj,date:obj.updatedAt.substr(0,10)}
        })

        dispatch({type:'GET_COMMENT_SUCCESS',payload:result})
    } catch (e) {
        console.log('에러발생! ',e);
        dispatch({ type:'GET_COMMENT_ERROR',payload:e })
    }
}

// 댓글 작성
export const postComment = async (dispatch) => {
    dispatch({type:'POST_COMMENT'})
    try{
        console.log('postComment');

        // CodeBlock
        // fetch
        // fetch(url:string, option:object)
        // request method 'POST'
        const options = {
            method:'POST',
            header:{
                'Content-type':'application/json;charset=utf-8;',
            },
            body:JSON.stringify(body)
        }
        const response = await fetch('http://api.jihwandevelopment.com/api/comment',options)
        const data = await response.json()
        const result = {...data,date:data.updatedAt.substr(0,10)}

        dispatch({type:'POST_COMMENT_SUCCESS',payload:result});
    }
    catch (e){
        console.log('에러 발생! ',e);
        dispatch({type:'POST_COMMENT_ERROR'});
    }
}

// 댓글 수정
export const patchComment = async (dispatch) => {
    
}

// 댓글 삭제
export const deleteComment = async (dispatch) => {
    
}
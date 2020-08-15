
import axios from 'axios'


export const post = (url, params, dispatch, start, success, faild) => {
    dispatch({  type: start })
    axios({
        method: 'post',
        url,
        data: params
      }).then((response) => {
        console.log('Gelen Data Başarılı: => ', response.data );
        dispatch({  type: success, payload: response.data  })
      }).catch((err) => {
        console.log('Gelen Data Hatalı: => ', err );
        Alert.alert('UYARI', 'İstek sırasında bir sorun oluştu!')
        dispatch({  type: faild  })
      })
}
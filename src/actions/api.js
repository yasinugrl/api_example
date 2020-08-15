
import axios from 'axios'
import  { Alert } from 'react-native'

import * as RootNavigation from '../RootNavigation';



export const post = (url, params, dispatch, start, success, faild) => {
    console.log('Giden URL => ', url);
    dispatch({  type: start })
    axios({
        method: 'post',
        url,
        data: params
      }).then((response) => {
        console.log('Gelen POST Başarılı: => ', response.data );
        dispatch({  type: success, payload: response.data  })

        RootNavigation.replace('Home')

      }).catch((err) => {
        console.log('Gelen POST Hatalı: => ', err );
        Alert.alert('UYARI', 'İstek sırasında bir sorun oluştu!')
        dispatch({  type: faild  })
      })
}

export const get = (url, params, dispatch, start, success, faild) => {
    console.log('Giden URL => ', url);

    dispatch({  type: start })
    axios({
        method: 'get',
        url,
        headers: {
            authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMzdiMzA3ODQxZGEwMDAxNzlhYWRkYyIsImlhdCI6MTU5NzQ4NjU3NywiZXhwIjoxNTk3NjU5Mzc3fQ.WuuTZJ6NuOjgzMlUaNzVSqdDwFI1zdhsoS8Sj8u2MVU'
        }
      }).then((response) => {
        console.log('Gelen GET Başarılı: => ', response.data );
        dispatch({  type: success, payload: response.data  })
      }).catch((err) => {
        console.log('Gelen GET Hatalı: => ', err );
        Alert.alert('UYARI', 'İstek sırasında bir sorun oluştu!')
        dispatch({  type: faild  })
      })
}
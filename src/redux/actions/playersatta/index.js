import axios from 'axios'
import {API_URL} from '../../../configs/Constant'
export const playersatta =  () => {
    return axios.get(API_URL +  'game/singleAnk?id=5f5d104085ccd929f0ed06bc').then(res => { return res.data })

}

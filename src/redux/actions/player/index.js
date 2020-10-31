import axios from 'axios'
import {API_URL} from '../../../configs/Constant'
export const playerlist =  () => {
    return axios.get(API_URL +  'players').then(res => { return res.data })

    
}

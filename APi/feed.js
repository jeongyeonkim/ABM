import {Base64} from 'js-base64';
import async from 'asynck';
import moment from 'moment';
import { createContext } from 'vm';
import Db from '../DB';
import { jSXText } from 'babel-types';
import { ENETUNREACH } from 'constants';

export default class FeedApi{
     static new = async (ctx, next) => {
        const result = {result : true, code:0};
        if (ctx,state.member.id === undefined || ctx.state.member.id === null){
            ServerUtil.statusError(500. '로그인해야된다멍!');
        }
        const file = ctx.req.file;
        const param = JSON.parse(Base64.decode(ctx.req.body.param));
        try{
            await Db.sequelize.transaction(async transaction =>{
                const feed = await feed.create({
                    id: ctx.state.member.id,
                },{transaction});
                result.code = blog.code;
                if(file){
                    await ServerUtil.saveToJpeg(file.path);
                    await ImageModel.createImage({id:feed.id, origin_path: file.filename, url: file.filename, main_image: true }, transaction);

                }
                await new Promise((resolve, reject) => {
                    async each(param.tags,async(v,cb)=> {
                        await 
                    })
                })
            })
        }

    }
}
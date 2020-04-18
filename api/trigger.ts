import { NowRequest, NowResponse } from '@now/node';

export default (req: NowRequest, res: NowResponse) => {
  console.log(req);
  res.status(200).send('Noice!');
};

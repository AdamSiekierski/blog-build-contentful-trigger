import { NowRequest, NowResponse } from '@now/node';
import axios from 'axios';

export default (req: NowRequest, res: NowResponse) => {
  axios
    .post(
      'https://api.github.com/repos/AdamSiekierski/blog/dispatches',
      {
        event_type: 'contentful-build',
      },
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      },
    )
    .then(({ data }) => {
      console.log(data);
      res.status(200).json({ message: 'Noice! it worked. maybe.' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: 'internal server error. fuck off',
      });
    });
};

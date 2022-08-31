import AWS from 'aws-sdk';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import xns from 'xns';

dotenv.config();

xns(async () => {
	const s3 = new AWS.S3({
		accessKeyId: process.env.S3_ACCESS_KEY,
		secretAccessKey: process.env.S3_SECRET_KEY,
	});
	const result = await new Promise<AWS.S3.ManagedUpload.SendData>(
		(resolve, reject) => {
			s3.upload(
				{
					Bucket: 'kogan-prod-assets/files/daily-deal-videos',
					Key: `daily-deal-${Date.now()}.mp4`,
					Body: fs.readFileSync(path.join(__dirname, '..', 'out/video.mp4')),
					ACL: 'public-read',
				},
				(err, data) => {
					if (err) {
						reject(err);
					} else {
						resolve(data);
					}
				}
			);
		}
	);
});

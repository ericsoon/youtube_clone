import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoVideoTitle, demoVideoUrl, demoChannelTitle, demoChannelUrl } from '../utils/constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
  <Card sx={{ width: { md: '320px', xs: '100%' }, boxShadow: 'none', borderRadius: 0 }}>
    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{ width: '350px', height: '180px' }}
      />
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Link>
  </Card>
);

export default VideoCard;

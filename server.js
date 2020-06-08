const express = require('express');
const fs = require('fs');
const path = require('path');
const mcache = require('memory-cache');

const port = process.env.PORT || 5000;
const app = express();

const DEFAULT_TITLE = 'Dave Richardson | Full Stack Developer';
const DEFAULT_DESCRIPTION = 'Hey there, I am a full stack software developer living in Winnipeg, Canada';
const DEFAULT_IMAGE = 'https://daverichardson.ca/images/about_en.zh';

const t = {
  en: {
    '/': {
      title: 'Dave Richardson | Full Stack Developer > my website',
      description: 'Hey there, my name is Dave Richardson and this is my website.',
      image: 'https://daverichardson.ca/images/about_en.png',
    },
    '/about': {
      title: 'Dave Richardson | Full Stack Developer > about me',
      description: "I'm a full stack developer that loves to learn new things.",
      image: 'https://daverichardson.ca/images/about_en.png',
    },
    '/blog': {
      title: 'Dave Richardson | Full Stack Developer > my blog',
      description: 'Here are a few of my latest blog articles',
      image: 'https://daverichardson.ca/images/about_en.png',
    },
    '/contact': {
      title: 'Dave Richardson | Full Stack Developer > contact me',
      description: 'This is a list of the best ways to contact me',
      image: 'https://daverichardson.ca/images/about_en.png',
    },
    '/discover': {
      title: 'Dave Richardson | Full Stack Developer > discover more',
      description: 'Discover more information about me',
      image: 'https://daverichardson.ca/images/about_en.png',
    }
  },
  zh: {
    '/': {
      title: '理查森大卫 | 程序猿',
      description: '热爱探索, 我相信研究和发现',
      image: 'https://daverichardson.ca/images/about_zh.png',
    },
    '/about': {
      title: '理查森大卫 | 程序猿 > 关于',
      description: '热爱科技',
      image: 'https://daverichardson.ca/images/about_zh.png',
    },
    '/blog': {
      title: '理查森大卫 | 程序猿 > 发现',
      description: '热爱分享',
      image: 'https://daverichardson.ca/images/about_zh.png',
    },
    '/contact': {
      title: '理查森大卫 | 程序猿 > 发现',
      description: '热爱交流, 所以您想取得联系. 这是与我联系的最佳方法的简要指南',
      image: 'https://daverichardson.ca/images/about_zh.png',
    },
    '/discover': {
      title: '理查森大卫 | 程序猿 > 发现',
      description: '热爱探索, 我相信研究和发现',
      image: 'https://daverichardson.ca/images/about_zh.png',
    }
  }
};


const cache = (duration) => (req, res, next) => {
  let key = '__express__' + req.originalUrl || req.url
  let cachedBody = mcache.get(key)
  if (cachedBody) {
    res.send(cachedBody);
    return;
  } else {
    res.sendResponse = res.send
    res.send = (body) => {
      mcache.put(key, body, duration * 1000);
      res.sendResponse(body)
    };
    next();
  }
};

const generateMetaTags = (data, hostname, url) =>  {
  const lang = (hostname.toLowerCase().indexOf('dawei') >= 0) ? 'zh' : 'en';

  const {
    title = DEFAULT_TITLE,
    description = DEFAULT_DESCRIPTION,
    image = DEFAULT_IMAGE
  } = t[lang][url] || {};

  return data.replace(/\$OG_TITLE/g, title)
    .replace(/\$OG_DESCRIPTION/g, description)
    .replace(/\$OG_IMAGE/g, image);
};

app.get('/', cache(60), function(request, response) {
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) { return console.log(err); }

    response.send(generateMetaTags(data, request.hostname, request.path));
  });
});

app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', cache(60), function(request, response) {
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }

    response.send(generateMetaTags(data, request.hostname, request.path));
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
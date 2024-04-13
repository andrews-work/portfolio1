
import amiry from './../../images/amirysvehla.jpg';
import amiryM from './../../images/amiryM.png';
import ramen from './../../images/ramen.png';
import ramenM from './../../images/ramenM.png';
import mmv from './../../images/mmv.png';
import mmvM from './../../images/mmvM.png';

export interface ImageData {
    src: any;
    src2: any;
    alt: string;
    title: string;
    link: string;
  }
  
  export const images: ImageData[] = [
    {
      title: '001 - AmirySvehla Law & Migration - Complete',
      src: amiry,
      alt: 'https://www.amirysvehla.com.au',
      link: 'https://www.amirysvehla.com.au',
      src2: amiryM,
    },
    {
      title: '002 - Manpuku Ramen - Under Construction',
      src: ramen,
      alt: 'Manpuku Ramen',
      link: 'https://www.',
      src2: ramenM,

    },
    {
      title: '003 - MargiesMagicalVerbs - Complete',
      src: mmv,
      alt: 'Margiesmagicalverbs.com',
      link: 'http://uat.margiesmagicalverbs.com',
      src2: mmvM,
    },
  ];
  
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json([
    {
      fullName: 'Abhishek Gupta',
      experience: '마케팅 · 2y+',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', 'SEO', '인스타그램 관리'],
      imgSrc: '/path/to/profile1.png',
    },
    {
      fullName: 'Abhishek Gupta',
      experience: '마케팅 · 2y+',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', 'SEO', '인스타그램 관리'],
      imgSrc: '/path/to/profile1.png',
    },
    {
      fullName: 'Abhishek Gupta',
      experience: '마케팅 · 4y+',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', 'SEO', '인스타그램 관리'],
      imgSrc: '/path/to/profile1.png',
    },
    {
      fullName: 'Abhishek Gupta',
      experience: '마케팅 · 2y+',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', 'SEO', '인스타그램 관리'],
      imgSrc: '/path/to/profile1.png',
    },
    {
      fullName: 'Abhishek Gupta',
      experience: '마케팅 · 2y+',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', 'SEO', '인스타그램 관리'],
      imgSrc: '/path/to/profile1.png',
    },
  ]);
}

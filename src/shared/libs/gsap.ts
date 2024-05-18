import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export * from 'gsap';
export * from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

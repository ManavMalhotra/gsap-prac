"use client"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Image from "next/image";
import img1 from "@/public/img1.jpeg"
import img2 from "@/public/img2.jpeg"
import img3 from "@/public/img3.webp"
import img4 from "@/public/img4.webp"
import male from "@/public/male.jpeg"
import female from "@/public/female.jpeg"
import logo from "@/public/logo.png"

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const b1 = useRef(null);
  const b2 = useRef(null);

  useGSAP(() => {
    const t1_img = gsap.timeline({ ease: "Power1.easeOut" })

    t1_img.to(".men .image-overlay", {
      duration: 1,
      y: "100%",
    })

    t1_img.to(".women .image-overlay", {
      duration: 1,
      y: "100%",
    }, "-=.7")

    t1_img.from(".img", {
      opacity: 0,
      duration: 0.4,
      scale: 1.2,
      stagger: .2
    })

    t1_img.from(".text", {
      opacity: 0,
      duration: 0.4,
      y: 20,
    })

    t1_img.to(".content", {
      // y: "80px",
      duration: 1,
      marginTop: "0"
    })

    const t2_header = gsap.timeline({ ease: "Power1.easeInOut" })

    t2_header.from("nav", {
      delay: 3.5,
      duration: 0.5,
      y: "-80",
    })

    t2_header.from(".logo", {
      opacity: 0,
      y: -20,
      duration: 0.5,
    })

    t2_header.from("nav li", {
      opacity: 0,
      y: -20,
      duration: 0.5,
      stagger: 0.2, // Stagger effect
    }, "-=.5")


  });

  return (
    <main className="">
      <nav className="flex justify-between px-16 py-4 text-white bg-black content mt-[-80px]">
        {/* <div className="w-8 h-8 bg-gray-500 logo"></div> */}

        <Image src={logo} alt="logo" className="w-auto h-8 logo" ></Image>

        <ul className="flex gap-12">
          <li className="cursor-pointer" >Home</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Our Services</li>
          <li className="cursor-pointer">Contact Us</li>
        </ul>
      </nav>

      <section className="flex">
        <div className="men w-[70%] h-[92vh]  relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-black image-overlay"></div>
          <Image src={male} alt="wolf" objectFit="contain" className="img"
            style={{
              filter: "brightness(0.5) grayscale(1) contrast(0.9) ",
              width: "100%",
            }}
          ></Image>
          <div className="absolute w-full text-center text-white text bottom-28">
            <h1 className="text-6xl uppercase">Men</h1>
            <h1>Fashion</h1>
          </div>

          <div className=" shop-now absolute transition-all px-2 py-2 top-[50%] left-[50%] border border-white border-solid translate-x-[-80px] opacity-0 hover:opacity-100 ">
            <Link href="/" className="text-base text-white uppercase ">
              Shop Now
            </Link>
          </div>

        </div>

        <div className="women w-[70%] h-[92vh] relative overflow-hidden">
          <Image src={img3} objectFit="contain" alt="women" className="img"
            style={{
              filter: "brightness(0.5) grayscale(1) contrast(0.9) ",
              width: "100%",

            }}

          ></Image>
          <div className="absolute top-0 left-0 w-full h-full bg-black image-overlay"></div>
          <div className="absolute w-full text-center text-white bottom-28 text">
            <h1 className="text-6xl uppercase ">Women</h1>
            <h1>Fashion</h1>
          </div>

          <div className=" shop-now absolute transition-all px-2 py-2 top-[50%] left-[50%] border border-white border-solid translate-x-[-80px] opacity-0 hover:opacity-100 ">
            <Link href="/" className="text-base text-white uppercase ">
              Shop Now
            </Link>
          </div>


        </div>


      </section>
    </main>
  );
}
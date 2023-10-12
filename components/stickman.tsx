import React, { useEffect,useState } from 'react';
import { gsap } from 'gsap';
import head from '../public/images/head.png'
import lefthand from '../public/images/left-hand.png'
import righthand from '../public/images/right-hand.png'
import leftleg from '../public/images/left-leg.png'
import rightleg from '../public/images/right-leg.png'
import body from '../public/images/body.png'
import Image from 'next/image';
import { start } from 'repl';
interface Coordinates {
  top: number;
  left: number;
}
function StickmanAnimation() {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ top: '50%', left: '80%' });
  const [startPosition, setStartPosition] = useState<Coordinates | null>(null)
  let dragTimeline = gsap.timeline();
  let nonDragTimeline = gsap.timeline();
  let returnTimeline = gsap.timeline();
  useEffect(() => {
    console.log('1')
    const leftArm = document.getElementById('left-arm');
    const rightArm = document.getElementById('right-arm');
    const rightleg = document.getElementById('right-leg');
    const leftleg = document.getElementById('left-leg');
    const head = document.getElementById('head');
    const all = document.getElementById('all')

     gsap.to(rightArm, {
      rotation: -150,
      transformOrigin: 'center',
      transform: 'translateY(-80%)',
      duration: 1,
      onComplete: () => {
        gsap.to(rightArm, {
          rotation: -165,
          transformOrigin: 'center',
          transform: 'translate(-2%, -75%)',
          repeat: -1,
          yoyo: true,
          duration: 1,
        });
      },
    });
    dragTimeline.clear();
    nonDragTimeline.clear();

    if (isDragging) {
      dragTimeline.to(document.getElementById('right-leg'), {
        rotation: -20,
        repeat: -1,
        yoyo: true,
        duration: 1,
      });
      dragTimeline.to(document.getElementById('left-leg'), {
        rotation: -20,
        repeat: -1,
        yoyo: true,
        duration: 1,
      });
      gsap.to(document.getElementById('right-arm'), {
        rotation: -10,
        repeat: -1,
        yoyo: true,
        duration: 1,
      });
      gsap.to(document.getElementById('left-arm'), {
        rotation: -10,
        repeat: -1,
        yoyo: true,
        duration: 1,
      });
      gsap.to(document.getElementById('body'), { skewY: -20, repeat:0,transform:"translateY(-30px)" });
    } else {
      // Animation when not dragging
      nonDragTimeline.to(document.getElementById('right-leg'), {
        rotation: 0,
        duration: 1,
        repeat:-1
      });
      nonDragTimeline.to(document.getElementById('left-leg'), {
        rotation: 0,
        duration: 1,
        repeat:-1
      });
      gsap.to(document.getElementById('body'), { skewY: 0,transform:"translateY(0)" });
    }
    if (!isDragging) {
      const animationDuration = 1;
      gsap.to(all, {
        top: '50%',
        left: '80%',
        delay:3,
        duration: animationDuration, // Use the same duration
        onComplete: () => {
          setPosition({ top: '50%', left: '80%' });
        },
      });
    }
  }, [isDragging]);


  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    const target = e.currentTarget;
    setStartPosition({
      top: e.clientY - target.getBoundingClientRect().top,
      left: e.clientX - target.getBoundingClientRect().left,
    });
  };

  const handleMouseMove = (e:React.MouseEvent) => {
    if (isDragging && startPosition) { 
      const top = e.clientY - startPosition.top;
      const left = e.clientX - startPosition.left;
      setPosition({ top: `${top}px`, left: `${left}px` });
    }
  };
  

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div id='all'
    style={{
      position: 'fixed',
      top: position.top,
      left: position.left,
      cursor: isDragging ? 'grabbing' : 'grab',
    }}
    onMouseDown={handleMouseDown}
    onMouseMove={handleMouseMove}
    onMouseUp={handleMouseUp}
  >
        <div id='body' style={{position:'relative',height:"90px",width:"50px", backgroundColor:"red",borderTopLeftRadius:"15px",borderTopRightRadius:"15px"}}>
          <Image id='head' style={{position:"absolute", top:"-50%", width:"50px", height:"50px"}} src={head} alt='head'/>
          <div id='left-arm' style={{backgroundColor:"blue", position:"absolute",
          left:"-50%",top:"10%", width: "20px", height:"80px", borderTopLeftRadius:"30px"}}></div>
          <div id='right-arm' style={{backgroundColor:"blue", position:"absolute",top:"10%",borderTopRightRadius:
        "30px",right:"-50%", width: "20px", height:"80px"}}></div>
          <div id='left-leg' style={{backgroundColor:"blue", position:"absolute",bottom:"-100%", width: "20px", height:"80px"}}></div>
          <div id='right-leg' style={{backgroundColor:"blue", position:"absolute",bottom:"-100%",right:"0%", width: "20px", height:"80px"}}></div>
          
    </div>
    <div style={{position:"absolute", top:"-175%",left:"100%", backgroundColor:"white",width:"100px",height:"100px", borderRadius:"45%"}}><p style={{textAlign:"center",color:"black", padding:"0.5em"}}>Hello, Im Mini Jacob</p></div>
    </div>
  );
}

export default StickmanAnimation;






"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Button from "@/components/Button/Button";
import { treatments } from "@/data/treatments";
import styles from "./Treatments.module.css";

const loopTreatments = [...treatments, ...treatments];
const AUTO_SCROLL_SPEED = 36; // px per second
const DRAG_THRESHOLD = 5; // px of pointer movement before a click becomes a drag

export default function Treatments() {
  const trackRef = useRef(null);
  const isPausedRef = useRef(false);
  const isDraggingRef = useRef(false);
  const isPendingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, scrollLeft: 0, pointerId: null });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frameId;
    let lastTime = null;

    const wrap = () => {
      const half = track.scrollWidth / 2;
      if (half <= 0) return;
      while (track.scrollLeft >= half) track.scrollLeft -= half;
      while (track.scrollLeft < 0) track.scrollLeft += half;
    };

    const step = (time) => {
      if (lastTime !== null && !isPausedRef.current && !isDraggingRef.current) {
        const dt = (time - lastTime) / 1000;
        track.scrollLeft += AUTO_SCROLL_SPEED * dt;
        wrap();
      }
      lastTime = time;
      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const handlePointerDown = (event) => {
    const track = trackRef.current;
    if (!track || event.pointerType === "touch") return;
    isPendingRef.current = true;
    dragStartRef.current = { x: event.clientX, scrollLeft: track.scrollLeft, pointerId: event.pointerId };
  };

  const handlePointerMove = (event) => {
    const track = trackRef.current;
    if (!track || (!isPendingRef.current && !isDraggingRef.current)) return;

    const delta = event.clientX - dragStartRef.current.x;

    if (!isDraggingRef.current) {
      if (Math.abs(delta) < DRAG_THRESHOLD) return;
      isDraggingRef.current = true;
      track.setPointerCapture(dragStartRef.current.pointerId);
      track.classList.add(styles.dragging);
    }

    track.scrollLeft = dragStartRef.current.scrollLeft - delta;
  };

  const endDrag = () => {
    const track = trackRef.current;
    isPendingRef.current = false;
    isDraggingRef.current = false;
    track?.classList.remove(styles.dragging);
  };

  return (
    <section className="section" id="tretmani">
      <div className="container">
        <SectionHeading
          eyebrow="Tretmani"
          title="Odaberite tretman prema cilju koji želite postići"
          description="Bilo da želite dugotrajnije glatku kožu, svježiji izgled tena ili dodatnu podršku oblikovanju tijela, u Glow Atelieru možete pronaći tretman prilagođen vašem tempu."
        />

        <div
          ref={trackRef}
          className={styles.marqueeTrack}
          onMouseEnter={() => {
            isPausedRef.current = true;
          }}
          onMouseLeave={() => {
            isPausedRef.current = false;
            endDrag();
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          {loopTreatments.map((treatment, i) => {
              const isDuplicate = i >= treatments.length;

              return (
                <article
                  key={`${treatment.slug}-${i}`}
                  className={styles.card}
                  aria-hidden={isDuplicate || undefined}
                >
                  <div className={styles.media}>
                    <Image
                      src={treatment.image}
                      alt={`${treatment.title} u Glow Atelieru`}
                      fill
                      draggable={false}
                      sizes="300px"
                      className={styles.image}
                    />
                    <span className={styles.priceBadge}>od {treatment.pricing.startingPrice}€</span>
                  </div>

                  <div className={styles.body}>
                    <span className={styles.kicker}>{treatment.kicker}</span>
                    <h3>{treatment.title}</h3>
                    <p>{treatment.shortDescription}</p>

                    <ul className={styles.points}>
                      {treatment.points.slice(0, 2).map((point) => (
                        <li key={point}>
                          <Check size={14} strokeWidth={2.4} aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className={styles.actions}>
                      <Button
                        href={treatment.href}
                        variant="primary"
                        size="sm"
                        tabIndex={isDuplicate ? -1 : undefined}
                      >
                        Saznaj više
                      </Button>
                      <Link
                        href="/rezervacija"
                        className={styles.textLink}
                        tabIndex={isDuplicate ? -1 : undefined}
                      >
                        Rezerviraj termin
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
        </div>
      </div>
    </section>
  );
}

import { ArrowDownRight, MapPin } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/sections/HeroVisual";
import Image from "next/image";

export function Hero() {

  return (
    <>
      {/* Hero Visual with Profile Image */}

      {/* Original Hero Section - Preserved */}
      <section id="top" className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
          <div className="grid-overlay absolute inset-0 opacity-70" />
          <div className="noise-overlay absolute inset-0" />
        </div>

        <Container className="relative grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-border bg-background-soft/70 px-3 py-1.5 text-xs text-foreground-muted">
              <MapPin size={13} className="text-accent" />
              {personalInfo.location} · {personalInfo.experienceYears} years experience
            </div>

            <p className="font-display text-lg font-medium tracking-tight text-foreground sm:text-xl">
              {personalInfo.name}
            </p>
            <p className="mt-1 text-sm text-foreground-muted">{personalInfo.title}</p>

            <h1 className="mt-6 max-w-xl font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08]">
              {personalInfo.headline}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground-muted sm:text-lg">
              {personalInfo.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#projects">
                View My Work
                <ArrowDownRight size={16} />
              </Button>
              <Button href="#contact" variant="secondary">
                Let&apos;s Connect
              </Button>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[360px] items-center justify-center lg:ml-auto lg:mr-6 lg:max-w-[340px]">
            {/* Soft background glow */}
            <div className="absolute inset-10 rounded-full bg-accent/20 blur-3xl" />

            {/* Profile image */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-background-soft shadow-2xl">
              <Image
                src="/assets/portfolio-image.png"
                alt="Haris Qadeer Khan - Senior Software Engineer"
                fill
                priority
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 340px"
                className="object-cover object-[center_20%]"
              />
            </div>
          </div>

          {/* <HeroVisual /> */}
        </Container>
      </section>
    </>
  );

}

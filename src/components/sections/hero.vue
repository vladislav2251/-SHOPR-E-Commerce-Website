<template>
    <section class="w-full mt-16"></section>
    <Container>
        <div class="z-10 flex min-h-[15rem] md:min-h-[30rem] flex-col p-8 bg-[url('/img/chair.jpg')] bg-cover bg-center object-cover">
            <div class="grid gap-2 max-w-[27rem]">
                <Typography text-split letters-slide-up tag="h2" bold="bold" class="text-3xl md:text-6xl">
                    Qona®
                </Typography>
                
                <Typography text-split words-slide-from-right tag="p" bold="normal" class="text-md md:text-lg text-[#3E3E59] font-[Inter]">
                    Keep your everyday style chic and on-trend with our selection 20+ styles to choose from.
                </Typography>

                <div class="flex gap-2 underline mt-20 items-center">
                    <Typography tag="p" bold="normal" class="text-md md:text-lg">See Collection</Typography>
                    <Icons size="md" name="arrow-right" />
                </div>
            </div>
        </div>
    </Container>
</template>
<script setup>
    import Container from '@/components/ui/container.vue';
    import Typography from '@/components/ui/typography.vue';
    import Icons from '@/components/ui/icons.vue';

    import { onMounted } from 'vue';
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import SplitType from 'split-type';
    
    gsap.registerPlugin(ScrollTrigger);
    
    onMounted(() => {
        // Разделение текста на спаны
        new SplitType('[text-split]', {
        types: 'words, chars',
        tagName: 'span',
        });
    
        function createScrollTrigger(triggerElement, timeline) {
        ScrollTrigger.create({
            trigger: triggerElement,
            start: 'top bottom',
            onLeaveBack: () => {
            timeline.progress(0);
            timeline.pause();
            },
        });
        ScrollTrigger.create({
            trigger: triggerElement,
            start: 'top 60%',
            onEnter: () => timeline.play(),
        });
        }
    
        document.querySelectorAll('[letters-slide-up]').forEach((el) => {
        const tl = gsap.timeline({ paused: true });
        tl.from(el.querySelectorAll('.char'), {
            yPercent: 100,
            duration: 0.5,
            ease: 'power1.out',
            stagger: { amount: 0.6 },
        });

        document.querySelectorAll('[words-slide-from-right]').forEach((el) => {
        const tl = gsap.timeline({ paused: true });
        tl.from(el.querySelectorAll('.word'), {
            opacity: 0,
            x: '1em',
            duration: 1.5,
            ease: 'power2.out',
            stagger: { amount: 0.2 },
        });
        createScrollTrigger(el, tl);
    });

        createScrollTrigger(el, tl);
        });
    });
</script>
<style>
    .word {
        overflow: hidden;
        padding-bottom: 0.1em;
        margin-bottom: -0.1em;
        transform-origin: bottom;
    }
</style>

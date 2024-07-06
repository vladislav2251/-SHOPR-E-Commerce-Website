<template>
    <section class="w-full py-4 lg:py-8"></section>
    <Container>
        <div class="relative z-10 flex h-full flex-col bg-[url('/img/sofa.jpg')] bg-cover bg-center object-cover p-8">
            <div class="grid gap-2 max-w-[27rem]">
                <Typography tag="h2" bold="bold" class="text-3xl md:text-6xl">
                    Maydro Series®
                </Typography>
                
                <Typography tag="p" bold="normal" class="text-md md:text-lg text-[#3E3E59] font-[Inter]">
                    Phosfluor escently engage worldwide methodologies with web-enabled process-centric technology.
                </Typography>

                <div class="flex gap-2 underline mt-20 items-center">
                    <Typography tag="p" bold="normal" class="text-md md:text-lg">
                        Get Started
                    </Typography>
                    <Icons size="md" name="arrow-right" />
                </div>
            </div>
        </div>
    </Container>
</template>
<script setup lang="ts">
    import Container from '@/components/ui/container.vue';
    import Typography from '@/components/ui/typography.vue';
    import Icons from '@/components/ui/icons.vue';
</script>

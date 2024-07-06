<template>
    <section class="w-full">
        <Container>
            <div class="mt-4 lg:mt-8 grid lg:grid-cols-2 gap-4 lg:gap-8">
                <div class="w-full min-h-[15rem] md:min-h-[30rem] p-8 bg-[url('/img/kopla.jpg')] bg-cover bg-center object-cover">
                    <Typography tag="h2" bold="bold" class="text-3xl text-[#121212]">
                        Kopla
                    </Typography>

                    <div class="flex gap-2 underline items-center">
                        <Typography tag="p" bold="normal" class="text-md lg:text-lg cursor-pointer">
                            Shop Now
                        </Typography>

                        <Icons size="sm" name="arrow-right" />
                    </div>
                </div>

                <div class="flex flex-col gap-4 lg:gap-8">
                    <div class="w-full h-full p-8 bg-[url('/img/lola.jpg')] bg-cover bg-center object-cover">
                        <Typography tag="h2" bold="bold" class="text-xl lg:text-3xl text-[#121212]">
                            Lola
                        </Typography>

                        <div class="flex gap-2 underline items-center">
                            <Typography tag="p" bold="normal" class="text-md lg:text-lg cursor-pointer">
                                Shop Now
                            </Typography>

                            <Icons size="sm" name="arrow-right" />
                        </div>
                    </div>

                    <div class="w-full h-full p-8 bg-[url('/img/folka.jpg')] bg-cover bg-center object-cover">
                        <Typography tag="h2" bold="bold" class="text-xl lg:text-3xl text-[#121212]">
                            Folka
                        </Typography>

                        <div class="flex gap-2 underline items-center">
                            <Typography tag="p" bold="normal" class="text-md lg:text-lg cursor-pointer">
                                Shop Now
                            </Typography>

                            <Icons size="sm" name="arrow-right" />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
</template>
<script setup lang="ts">
    import Container from '@/components/ui/container.vue';
    import Icons from '@/components/ui/icons.vue';
</script>

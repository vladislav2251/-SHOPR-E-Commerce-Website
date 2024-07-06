<template>
    <section id="new-arrivals" aria-labelledby="arrival-heading">
        <Container>
            <div class="grid grid-cols-2 mb-4 items-center">
                <Typography tag="h2" bold="bold" class="text-2xl">
                    New Arrivals
                </Typography>
                
                <Image 
                    src="/svg/dots.svg"
                    alt="navigation-dots"
                    class="place-self-end">
                </Image>
            </div>

            <div class="grid grid-cols-2 lg:grid-cols-4 place-items-center gap-4 lg:gap-8">
                <routerlink :to="element.path" v-for="(element, i) in arrivals" class="flex flex-col max-w-max over">
                    <div class="overflow-hidden">
                        <Image
                            :src="element.image"
                            :alt="element.label"
                            class="transition-all duration-500 scale-100 hover:scale-105"
                        />
                    </div>

                    <Typography tag="p" bold="bold" class="text-base">
                        {{ element.label }}
                    </Typography>

                    <Typography tag="p" bold="bold" class="text-base">
                        ${{ element.price }}.00
                    </Typography>
                </routerlink>
            </div>
        </Container>
    </section>
</template>
<script setup lang="ts">
    import { ref } from 'vue';

    import Container from '@/components/ui/container.vue';
    import Typography from '@/components/ui/typography.vue';
    import Image from '@/components/ui/image.vue';

    const arrivals = ref([
        { image: '/img/falo-chair.jpg', label: 'Falo Chair', price: '156', path: '/#' },
        { image: '/img/yuniko-lamp.jpg', label: 'Yuniko Lamp', price: '56', path: '/#' },
        { image: '/img/klara-chair.jpg', label: 'klara Chair', price: '56', path: '/#' },
        { image: '/img/rezka-chair.jpg', label: 'Rezka Chair', price: '56', path: '/#' },
    ]);
</script>

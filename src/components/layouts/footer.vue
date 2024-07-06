<template>
    <footer class="w-full">
        <Container>
            <div class="flex lg:items-center justify-center flex-col gap-5">
                <div class="flex items-center gap-1">
                    <Image
                        src="/svg/logo.svg"
                        alt="SHOPR logo icon"
                    />

                    <Typography tag="h1" bold="bold" class="text-3xl uppercase">
                        shopr
                    </Typography>
                </div>

                <div class="flex max-lg:flex-col lg:place-items-center gap-5">
                    <router-link :to="element.path" v-for="(element, i) in links" :key="i">
                        {{ element.label }}
                    </router-link>     
                </div>
            </div>

            <hr class="w-full border-[#CBCBCB] mt-4">

            <div class="grid lg:grid-cols-2 items-center py-4">
                <div class="flex items-center gap-5">
                    <Image
                        src="/svg/mastercard.svg"
                        alt="Mastercard logo icon"
                    />

                    <Image
                        src="/svg/paypal.svg"
                        alt="Paypal logo icon"
                    />

                    <Image
                        src="/svg/gpay.svg"
                        alt="Google Pay logo icon"
                    />

                    <Image
                        src="/svg/visa.svg"
                        alt="Visa logo icon"
                    />

                    <Image
                        src="/svg/applepay.svg"
                        alt="Apple Pay logo icon"
                    />
                </div>

                <Typography tag="p" bold="normal" class="text-sm text-[#3E3E59] flex lg:justify-end lg:mt-0 mt-4">© 2023 SHOPR</Typography>
            </div>
        </Container>
    </footer>
</template>
<script lang="ts" setup>
    import { ref } from 'vue';

    import Container from '@/components/ui/container.vue';
    import Image from '@/components/ui/image.vue';
    import Typography from '@/components/ui/typography.vue';

    const links = ref([
        { path: '/about', label: 'About Us' },
        { path: '/account', label: 'My account' },
        { path: '/privacy', label: 'Privacy' },
        { path: '/contact', label: 'Contact Us' },
    ]);
</script>

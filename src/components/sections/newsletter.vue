<template>
    <section id="newsletter" aria-labelledby="newsletter-heading" class="w-full py-8 lg:py-16">
        <Container>
            <div class="grid gap-8 place-items-center">
                <div class="grid gap-4 place-items-center">
                    <Typography tag="h2" bold="bold" class="text-4xl">
                        Join Our Newsletter
                    </Typography>

                    <Typography tag="p" bold="bold" class="text-xl">
                        Big discounts and right to your inbox.
                    </Typography>
                </div>

                <div class="grid lg: grid-cols-2 gap-4 place-content-center">
                    <input type="email" class="border active:outline-none py-2 px-4" name="Email">

                    <button type="submit" name="button" class="py-2 px-4 active:outline-none bg-black transition-all duration-200 border hover:bg-transparent text-white hover:text-black">Sign Up</button>
                </div>
            </div>
        </Container>
    </section>
</template>
<script setup lang="ts">
    import Container from '@/components/ui/container.vue';
    import Typography from '@/components/ui/typography.vue';
    import Icons from '@/components/ui/icons.vue';
</script>

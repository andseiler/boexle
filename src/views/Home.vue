<template>
  <section class="relative flex justify-center bg-primarycontrast-500">
    <video-background
        src="images/pocketledge-teaser.mp4"
        class="h-[300px] sm:h-[500px] md:h-[720px] md:max-w-[1280px]"
        overlay="rgba(50, 30, 10, 0.4)"
        poster="images/hp-teaser.png"
    >
      <div class="absolute top-4 right-4 bg-gradient-to-r
      from-primary-500 to-primary-600
      hidden md:flex
      rotate-12 text-white text-sm font-bold rounded-full shadow-lg 
      flex text-center flex-col gap-2
      items-center justify-center z-20 h-36 w-36 lg:h-48 lg:w-48">
        <span class="gloria-hallelujah-regular text-xl lg:text-3xl">{{ $t('Early Bird') }}</span>
        <span class=" font-bolder text-4xl lg:text-5xl gloria-hallelujah-regular">-{{ rebate }} €</span>
        <span class="text-sm italic font-normal"><span class="hidden lg:inline">{{
            $t('Nur noch')
          }}</span> {{ totalAvailable - preOrderCount }} {{ $t('verfügbar') }}</span>
      </div>
    </video-background>
    <div class="absolute inset-0 flex flex-col items-center justify-center px-4 z-20">
      <h1 class="fade-in text-5xl sm:text-6xl font-extrabold mb-2 sm:mb-8 text-textbright">
        <!--          <img src="/images/pocketledge-logo-v2-white.svg" alt="">-->
        <span class="gloria-hallelujah-regular custom-text-shadow">POCKETLEDGE</span>
      </h1>
      <div class="text-xl sm:text-2xl mb-4 sm:mb-8 text-textbright text-center custom-text-shadow max-w-[33rem]">
        <div class="flex flex-col gap-2">
          <div>{{ $t('Auf- und Abbau in') }} <strong class="text-primary-500">{{ $t('1 Minute') }}</strong></div>
          <div>{{ $t('Passt in eine') }} <strong class="text-primary-500">{{ $t('Eurobox') }}</strong> (60x40x30 cm)</div>
          <!--          <div>Kein Wackeln, <strong class="text-primary-500">kein Verrutschen</strong></div>-->
          <!--          <div>Wiegt so viel wie ein <strong class="text-primary-500">Bierkasten</strong></div>-->
        </div>
        <!--          {{ $t('Extrem stabil, in 1 Minute auf- und abgebaut, passt perfekt in eine Eurobox (60x40x30 cm) und wiegt so viel wie ne Bierkiste')}}-->
      </div>
      <div class="hidden sm:block">
        <div @click="showOrderModalFunc" class="gradient-button mb-8">
          <shopping-cart-icon class="w-6"></shopping-cart-icon>
          <span>{{ $t('Jetzt vorbestellen') }}</span>
        </div>
      </div>

    </div>
  </section>
  <div class="bg-primarycontrast-500 w-full">
    <section id="features" class="container mx-auto px-4 py-12 max-w-screen-xl text-center relative">
      <div class="absolute top-[-3.5rem] right-2 sm:right-8 bg-gradient-to-r from-primary-500 to-primary-600 text-white
                    flex md:hidden
                    rotate-12 font-bold rounded-full shadow-lg
                    flex text-center flex-col
                    items-center justify-center z-20 h-28 w-28">
        <span class="gloria-hallelujah-regular text-base">{{ $t('Early Bird') }}</span>
        <span class=" font-bolder text-xl gloria-hallelujah-regular">-{{ rebate }} €</span>
        <span class="text-xs italic font-normal">{{ totalAvailable - preOrderCount }} {{ $t('verfügbar') }}</span>
      </div>
      <div class="inline-block sm:hidden">
        <div @click="showOrderModalFunc" class="w-fit gradient-button gradient-button-outline mb-8">
          <shopping-cart-icon class="w-6"></shopping-cart-icon>
          <span>{{ $t('Jetzt vorbestellen') }}</span>
        </div>
      </div>
      <h2 class="text-center text-textbright text-2xl font-bold ">
        {{ $t('Aufbau in nur 1 Minute!') }}
      </h2>
      <p class="text-center text-textsemibright mb-8 mt-4">
        {{ $t('In nur 1 Minute eine 1,80 m lange Ledge mit 25 cm Höhe skaten, perfekt zum Tricks lernen!') }}</p>
      <div class="flex flex-col lg:flex-row items-center justify-center gap-6">

        <div class="bg-tertiary-200 rounded-lg shadow p-6 flex flex-col items-center w-96">
          <div class="relative w-full aspect-[4/3] cursor-pointer hover:opacity-90 transition-opacity group" @click="openImageModal('/images/final/transport-hori.jpeg', $t('Transportmodus'))">
            <div class="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse rounded" v-show="!imageLoaded[0]">
              <svg class="w-12 h-12 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <img src="/images/final/transport-43.jpeg" alt="Transportmodus" class="w-full h-full object-cover rounded" @load="imageLoaded[0] = true" :class="{'opacity-0': !imageLoaded[0], 'opacity-100 transition-opacity duration-300': imageLoaded[0]}">
            <div class="absolute bottom-2 right-2 bg-primary-500 rounded-full p-2 opacity-0 group-hover:opacity-80 transition-opacity">
              <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3h-6" />
              </svg>
            </div>
          </div>
          <p class="mt-2 text-center text-textdark font-semibold">{{ $t('Transportmodus') }}</p>
        </div>

        <div class="text-textbright text-3xl font-bold">
          <span class="inline lg:hidden">↓</span>
          <span class="hidden lg:inline">➜</span>
        </div>

        <div class="bg-tertiary-200 rounded-lg shadow p-6 flex flex-col items-center  w-96">
          <div class="relative w-full aspect-[4/3] cursor-pointer hover:opacity-90 transition-opacity group" @click="openImageModal('/images/final/verriegeln-hori.jpeg', $t('Aufklappen & Verriegeln'))">
            <div class="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse rounded" v-show="!imageLoaded[1]">
              <svg class="w-12 h-12 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <img src="/images/final/verriegeln-43.jpeg" alt="Setup" class="w-full h-full object-cover rounded" @load="imageLoaded[1] = true" :class="{'opacity-0': !imageLoaded[1], 'opacity-100 transition-opacity duration-300': imageLoaded[1]}">
            <div class="absolute bottom-2 right-2 bg-primary-500 rounded-full p-2 opacity-0 group-hover:opacity-80 transition-opacity">
              <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3h-6" />
              </svg>
            </div>
          </div>
          <p class="mt-2 text-center text-textdark font-semibold">{{ $t('Aufklappen & Verriegeln') }}</p>
        </div>

        <div class="text-textbright text-3xl font-bold">
          <span class="inline lg:hidden">↓</span>
          <span class="hidden lg:inline">➜</span>
        </div>

        <div class="bg-tertiary-200 rounded-lg shadow p-6 flex flex-col items-center  w-96">
          <div class="relative w-full aspect-[4/3] cursor-pointer hover:opacity-90 transition-opacity group" @click="openImageModal('/images/final/skaten-hori.jpeg', $t('Skaten!'))">
            <div class="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse rounded" v-show="!imageLoaded[2]">
              <svg class="w-12 h-12 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <img src="/images/final/skaten-43.jpeg" alt="Skate" class="w-full h-full object-cover rounded" @load="imageLoaded[2] = true" :class="{'opacity-0': !imageLoaded[2], 'opacity-100 transition-opacity duration-300': imageLoaded[2]}">
            <div class="absolute bottom-2 right-2 bg-primary-500 rounded-full p-2 opacity-0 group-hover:opacity-80 transition-opacity">
              <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3h-6" />
              </svg>
            </div>
          </div>
          <p class="mt-2 text-center text-textdark font-semibold">{{ $t('Skaten!') }}</p>
        </div>

      </div>
      <div class="flex justify-center mt-12">
        <div @click="showModal = true" class=" w-fit gradient-button gradient-button-outline ">
          <PlayPauseIcon class="w-6"></PlayPauseIcon>
          <span>{{ $t('Aufbau in Aktion ansehen') }}</span>
        </div>
      </div>
    </section>
  </div>


  <div class="bg-tertiary-200">
    <section id="testimonials" class="container mx-auto px-4 py-16 max-w-screen-xl">
      <h2 class="text-center text-primary-500 text-2xl font-bold mb-8">{{ $t('Was unsere Kunden sagen') }}</h2>
      <div class="grid md:grid-cols-3 gap-8">

        <div class="bg-white rounded-lg shadow p-6 text-center">
          <p class="text-textdark italic">
            {{ $t('"PocketLedge ist ein Gamechanger! Super stabil und perfekt für jede Session!') }}</p>
          <p class="mt-4 font-bold text-primary-500">{{ $t('- Max aus Berlin') }}</p>
        </div>

        <div class="bg-white rounded-lg shadow p-6 text-center">
          <p class="text-textdark italic">
            {{ $t('"Ich liebe meine Pocketledge, so schnell aufgebaut und passt locker in mein Lastenrad."') }}</p>
          <p class="mt-4 font-bold text-primary-500">{{ $t('- Lisa aus Wien') }}</p>
        </div>

        <div class="bg-white rounded-lg shadow p-6 text-center">
          <p class="text-textdark italic">
            {{
              $t('"Der Landi isch volle bärig, aber gibt halt keine Ledge. Jetzt bring ich einfach meine Eigene mit"')
            }}</p>
          <p class="mt-4 font-bold text-primary-500">{{ $t('- Chris aus Innsbruck') }}</p>
        </div>

      </div>
    </section>
  </div>

  <div class="bg-primarycontrast-500 w-full">
    <section id="price" class="container mx-auto px-4 py-16 max-w-screen-xl text-center">
      <h2 class="text-3xl font-extrabold text-textbright mb-6">
        {{ $t('Deine PocketLedge – Handgemacht in Österreich!') }}</h2>
      <p class="text-textsemibright text-lg mb-8">
        {{ $t('Perfekte Verarbeitung, langlebig und extrem stabil – in nur einer Minute aufgebaut!') }}
      </p>

      <div
          class="max-w-lg mx-auto bg-tertiary-200 rounded-lg shadow-lg p-8 flex flex-col items-center justify-center">
        <h3 class="ont-bold text-primary-500 mb-4 gloria-hallelujah-regular text-4xl">POCKETLEDGE</h3>
        <p class="text-4xl font-extrabold text-textdark">{{ price }} €</p>
        <p class="text-sm mb-6 text-textdark">{{ $t('(inkl. gesetzlicher MwSt)') }}</p>
        <p class="text-textdark mb-6">{{ $t('Handgefertigt in Österreich – sofort einsatzbereit!') }}</p>

        <ul class="text-textdark text-left space-y-3 mb-6">
          <li class="flex items-center">
            <CheckBadgeIcon class="w-6 text-primary-500"></CheckBadgeIcon>
            <span class="ml-2">{{ $t('Sekundenschneller Aufbau – in 1 Minute bereit') }}</span>
          </li>
          <li class="flex items-center">
            <CheckBadgeIcon class="w-6 text-primary-500"></CheckBadgeIcon>
            <span class="ml-2">{{ $t('Modulares Design – passt in jede Eurobox (60x40x30)') }}</span>
          </li>
          <li class="flex items-center">
            <CheckBadgeIcon class="w-6 text-primary-500"></CheckBadgeIcon>
            <span class="ml-2">{{ $t('Leicht transportabel - Wiegt so viel wie ein Bierkasten') }}</span>
          </li>
          <li class="flex items-center">
            <CheckBadgeIcon class="w-6 text-primary-500"></CheckBadgeIcon>
            <span class="ml-2">{{ $t('Hochwertige Handarbeit – Made in Austria') }} 🇦🇹</span>
          </li>
          <li class="flex items-center">
            <CheckBadgeIcon class="w-6 text-primary-500"></CheckBadgeIcon>
            <span class="ml-2">{{ $t('Perfekt zum Tricks lernen – 1,80 m lang und 25 cm hoch.') }}</span>
          </li>
          <li class="flex items-center">
            <CheckBadgeIcon class="w-6 text-primary-500"></CheckBadgeIcon>
            <span class="ml-2">{{ $t('Stabile Metallkonstruktion – kein Wackeln, kein Verrutschen') }}</span>
          </li>
        </ul>

        <!-- Order Button -->
        <div @click="showOrderModalFunc"
             class="gradient-button custom-color from-primarycontrast-500 to-primarycontrast-600">
          <shopping-cart-icon class="w-6"></shopping-cart-icon>
          {{ $t('Jetzt vorbestellen') }}
        </div>
      </div>

      <!-- Customization Option -->
      <div class="mt-8 flex flex-col items-center justify-center gap-6">
        <h3 class="text-xl font-bold text-textbright mb-2">{{ $t('Mach sie zu deiner eigenen Ledge!') }}</h3>
        <p class="text-textsemibright text-lg max-w-2xl mx-auto">
          {{
            $t('Du willst eine andere Größe oder eine individuelle Höhe? Kein Problem! Wir fertigen die PocketLedge genau nach deinen Wünschen an.')
          }}
        </p>
        <a @click="showContactModal=true" class="gradient-button gradient-button-outline">
          {{ $t('Jetzt individuelle Anfrage senden') }}
        </a>
      </div>
    </section>
  </div>


  <div class="bg-tertiary-200">
    <section id="faq" class="container mx-auto px-4 py-16 max-w-screen-xl">
      <h2 class="text-center text-primary-500 text-2xl font-bold mb-8">{{ $t('Häufig gestellte Fragen (FAQ)') }}</h2>

      <div class="max-w-2xl mx-auto space-y-6">

        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="font-bold text-primary-500">{{ $t('Wie lange dauert der Aufbau wirklich?') }}</h3>
          <p class="text-textdark mt-2">
            {{
              $t('Der Aufbau dauert tatsächlich nur 1 Minute! Dank unseres cleveren Designs kannst du PocketLedge blitzschnell einsatzbereit machen.')
            }}
            <br><br><span class="flex items-center gap-2">{{ $t('Der Beweis? Schau dir hier unser Video an') }} <div
              class="outline-button dark w-fit" @click="showModal=true"><PlayPauseIcon
              class="w-6"></PlayPauseIcon></div></span></p>
        </div>

        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="font-bold text-primary-500">{{ $t('Wie schwer ist PocketLedge?') }}</h3>
          <p class="text-textdark mt-2">
            {{
              $t('PocketLedge ist zwar super stabil und rutschfest, trotzdem perfekt transportabel. Die ganze Ledge wiegt nicht mehr als ein Kasten Bier. ')
            }}</p>
        </div>

        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="font-bold text-primary-500">{{ $t('Wie stabil ist PocketLedge?') }}</h3>
          <p class="text-textdark mt-2">
            {{
              $t('PocketLedge besteht aus hochwertigem Stahl und dank der rutschfesten Füße gibt es kein Wackeln. Wenn doch mal was kaputt geht, einfach einschicken und wir reparieren entweder auf Gewährleistung oder gegen eine kleine Gebühr.')
            }}</p>
        </div>

        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="font-bold text-primary-500">{{ $t('Passt PocketLedge wirklich in eine Eurobox?') }}</h3>
          <p class="text-textdark mt-2">
            {{ $t('Ja! Das Design ist so optimiert, dass PocketLedge perfekt in eine Eurobox (60x40x30 cm) passt.') }}
            <br><br><span class="flex items-center gap-2">{{
              $t('Wir bieten aber auch anderer Formate an, sprich uns dazu einfach an')
            }} <div class="outline-button dark w-fit" @click="showContactModal=true"><chat-bubble-oval-left-ellipsis-icon
                class="w-6"></chat-bubble-oval-left-ellipsis-icon></div></span></p>
        </div>

      </div>
    </section>
  </div>

  <div class="bg-primarycontrast-500 w-full">
    <section class="container mx-auto px-4 py-12 max-w-screen-xl text-center">
      <h2 class="text-3xl font-extrabold text-textbright mb-12">
        {{ $t('Die Vorteile') }}</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-tertiary-200 rounded-lg shadow p-6">
          <h2 class="text-xl font-bold mb-2 text-primary-500">{{ $t('Modulares Design') }}</h2>
          <p>
            {{ $t('Überall dabei, passt in jeden Kofferraum und sogar auf manche Fahrräder.') }}
          </p>
        </div>
        <div class="bg-tertiary-200 rounded-lg shadow p-6">
          <h2 class="text-xl font-bold mb-2 text-primary-500">{{ $t('Sekundenschneller Aufbau') }}</h2>
          <p>
            {{ $t('Kein Werkzeug, kein Gefummel, einfach ausklappen und in 1 Minute skaten.') }}
          </p>
        </div>
        <div class="bg-tertiary-200 rounded-lg shadow p-6">
          <h2 class="text-xl font-bold mb-2 text-primary-500">{{ $t('Stabile Metallkonstruktion') }}</h2>
          <p>
            {{ $t('Die solide Bauweise aus Stahl sorgt für Stabilität, kein Wackeln, kein Verrutschen.') }}
          </p>
        </div>
      </div>
    </section>
  </div>

  <div class="bg-tertiary-200">
    <section id="testimonials" class="container mx-auto px-4 py-16 max-w-screen-xl">
      <h2 class="text-center text-primary-500 text-2xl font-bold mb-8">{{ $t('Unsere Kunden in Action') }}</h2>
      
      <!-- Create a relative container with padding for the arrows -->
      <div class="relative px-12 md:px-14 lg:px-16">
        <!-- Swiper component -->
        <swiper
          :slides-per-view="3"
          :space-between="30"
          :pagination="{ 
            clickable: true,
            el: '.swiper-pagination-container' 
          }"
          :modules="[Pagination, Autoplay, Navigation]"
          :grab-cursor="true"
          :keyboard="{ enabled: true }"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }"
          :autoplay="{
            delay: 10000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }"
          :breakpoints="{
            '320': {
              slidesPerView: 1,
              spaceBetween: 20
            },
            '640': {
              slidesPerView: 2,
              spaceBetween: 20
            },
            '768': {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }"
          class="w-full touch-pan-y select-none"
        >
          <swiper-slide>
            <div class="bg-white rounded-lg p-6 text-center relative cursor-pointer" @click="openVideoModal('bs-nosegrind-180.mp4')">
              <div class="relative">
                <div class="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse rounded" v-show="!videoLoaded[0]">
                  <svg class="w-12 h-12 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
                <video class="w-full h-auto rounded" muted loop autoplay @loadeddata="videoLoaded[0] = true" @error="videoError[0] = true" :class="{'opacity-0': !videoLoaded[0], 'opacity-100 transition-opacity duration-300': videoLoaded[0]}">
                  <source src="/images/bs-nosegrind-180.mp4" type="video/mp4">
                </video>
                <div class="absolute inset-0 flex items-center justify-center" v-show="videoLoaded[0]">
                  <div class="bg-primary-500 rounded-full p-3 opacity-80">
                    <PlayPauseIcon class="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="bg-white rounded-lg p-6 text-center relative cursor-pointer" @click="openVideoModal('5050-bs-180.mp4')">
              <div class="relative">
                <div class="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse rounded" v-show="!videoLoaded[1]">
                  <svg class="w-12 h-12 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
                <video class="w-full h-auto rounded" muted loop autoplay @loadeddata="videoLoaded[1] = true" @error="videoError[1] = true" :class="{'opacity-0': !videoLoaded[1], 'opacity-100 transition-opacity duration-300': videoLoaded[1]}">
                  <source src="/images/5050-bs-180.mp4" type="video/mp4">
                </video>
                <div class="absolute inset-0 flex items-center justify-center" v-show="videoLoaded[1]">
                  <div class="bg-primary-500 rounded-full p-3 opacity-80">
                    <PlayPauseIcon class="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="bg-white rounded-lg p-6 text-center relative cursor-pointer" @click="openVideoModal('fakie-fs-5050.mp4')">
              <div class="relative">
                <div class="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse rounded" v-show="!videoLoaded[2]">
                  <svg class="w-12 h-12 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
                <video class="w-full h-auto rounded" muted loop autoplay @loadeddata="videoLoaded[2] = true" @error="videoError[2] = true" :class="{'opacity-0': !videoLoaded[2], 'opacity-100 transition-opacity duration-300': videoLoaded[2]}">
                  <source src="/images/fakie-fs-5050.mp4" type="video/mp4">
                </video>
                <div class="absolute inset-0 flex items-center justify-center" v-show="videoLoaded[2]">
                  <div class="bg-primary-500 rounded-full p-3 opacity-80">
                    <PlayPauseIcon class="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>

          <!-- Add the two new videos -->
          <swiper-slide>
            <div class="bg-white rounded-lg p-6 text-center relative cursor-pointer" @click="openVideoModal('bs-5050.mp4')">
              <div class="relative">
                <div class="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse rounded" v-show="!videoLoaded[3]">
                  <svg class="w-12 h-12 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
                <video class="w-full h-auto rounded" muted loop autoplay @loadeddata="videoLoaded[3] = true" @error="videoError[3] = true" :class="{'opacity-0': !videoLoaded[3], 'opacity-100 transition-opacity duration-300': videoLoaded[3]}">
                  <source src="/images/bs-5050.mp4" type="video/mp4">
                </video>
                <div class="absolute inset-0 flex items-center justify-center" v-show="videoLoaded[3]">
                  <div class="bg-primary-500 rounded-full p-3 opacity-80">
                    <PlayPauseIcon class="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="bg-white rounded-lg p-6 text-center relative cursor-pointer" @click="openVideoModal('bs-tailslide.mp4')">
              <div class="relative">
                <div class="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse rounded" v-show="!videoLoaded[4]">
                  <svg class="w-12 h-12 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
                <video class="w-full h-auto rounded" muted loop autoplay @loadeddata="videoLoaded[4] = true" @error="videoError[4] = true" :class="{'opacity-0': !videoLoaded[4], 'opacity-100 transition-opacity duration-300': videoLoaded[4]}">
                  <source src="/images/bs-tailslide.mp4" type="video/mp4">
                </video>
                <div class="absolute inset-0 flex items-center justify-center" v-show="videoLoaded[4]">
                  <div class="bg-primary-500 rounded-full p-3 opacity-80">
                    <PlayPauseIcon class="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        
        <!-- Navigation arrows positioned absolutely outside the slides -->
        <div class="swiper-button-prev !absolute !top-1/2 !transform !-translate-y-1/2 !text-primary-500 !opacity-70 hover:!opacity-100 transition-opacity duration-300 !left-0 z-10"></div>
        <div class="swiper-button-next !absolute !top-1/2 !transform !-translate-y-1/2 !text-primary-500 !opacity-70 hover:!opacity-100 transition-opacity duration-300 !right-0 z-10"></div>
      </div>
      
      <!-- External pagination -->
      <div class="swiper-pagination-container flex justify-center gap-2 my-8"></div>
      
      <div class="flex flex-col items-center justify-center gap-6">
        <h3 class="text-lg font-bold text-primary-500 mb-2">{{
            $t('Willst du auch in unserer Galerie erscheinen?')
          }}</h3>
        <div @click="showContactModal=true"
             class="gradient-button custom-color from-primarycontrast-500 to-primarycontrast-600">
          <video-camera-icon class="w-6"></video-camera-icon>
          {{ $t('Schick uns dein Video!') }}
        </div>
      </div>
    </section>
  </div>

  <!-- Video Modal -->
  <ModalComponent 
    :is-visible="showVideoModal" 
    :title="$t('Video')" 
    :is-video-mode="true"
    @close="showVideoModal = false"
  >
    <div class="p-4">
      <div class="relative pt-[56.25%]"> <!-- 16:9 aspect ratio -->
        <video 
          class="absolute inset-0 w-full h-full" 
          controls 
          autoplay
          :src="`/images/${currentVideo}`">
          {{ $t('Dein Browser unterstützt keine Videos.') }}
        </video>
      </div>
    </div>
  </ModalComponent>

  <!-- Image Modal -->
  <ModalComponent 
    :is-visible="showImageModal" 
    :title="$t(currentImageTitle)"
    :is-image-mode="true"
    @close="closeImageModal"
  >
    <div class="p-4 flex items-center justify-center bg-black relative">
      <button 
        v-if="currentImageIndex > 0" 
        @click="showPreviousImage" 
        class="absolute left-8 bg-primary-500 rounded-full p-3 opacity-70 hover:opacity-100 transition-opacity z-10"
      >
        <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <img 
        :src="currentImage" 
        :alt="$t(currentImageTitle)"
        class="max-w-full max-h-[80vh] object-contain"
      />
      
      <button 
        v-if="currentImageIndex < setupImages.length - 1" 
        @click="showNextImage" 
        class="absolute right-8 bg-primary-500 rounded-full p-3 opacity-70 hover:opacity-100 transition-opacity z-10"
      >
        <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </ModalComponent>
</template>

<script setup lang="ts">
//@ts-ignore
import 'swiper/css';
//@ts-ignore
import 'swiper/css/pagination';
//@ts-ignore
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import {onMounted, onUnmounted, ref} from "vue";
import {
  ShoppingCartIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  CheckBadgeIcon,
  VideoCameraIcon,
  PlayPauseIcon,
} from '@heroicons/vue/24/outline'
import useCartStore from "../store/cartStore.ts";
//@ts-ignore
import VideoBackground from 'vue-responsive-video-background-player'
import useModalStore from '../store/modalStore';
import usePreOrderStore from '../store/usePreOrderStore';
import ModalComponent from '../components/ModalComponent.vue';

const {cartItem} = useCartStore();

const {showModal, showContactModal, showOrderModal, showCartModal} = useModalStore();
const {preOrderCount, totalAvailable, price, rebate} = usePreOrderStore();
const isScrolled = ref(false);
const showHeader = ref(true);
const lastScrollPosition = ref(0);
const scrollOffset = 0;
const showVideoModal = ref(false);
const currentVideo = ref('bs-nosegrind-180.mp4');
const imageLoaded = ref([false, false, false]);
const videoLoaded = ref([false, false, false, false, false]);
const videoError = ref([false, false, false, false, false]);

// Image modal state
const showImageModal = ref(false);
const currentImage = ref('');
const currentImageTitle = ref('');
const currentImageIndex = ref(0);

// Setup images data
const setupImages = [
  {
    src: '/images/final/transport-hori.jpeg',
    title: ''
  },
  {
    src: '/images/final/verriegeln-hori.jpeg',
    title: ''
  },
  {
    src: '/images/final/skaten-hori.jpeg',
    title: ''
  },
  {
    src: '/images/final/scharnier-zu.jpeg',
    title: ''
  },
  {
    src: '/images/final/scharnier-w.jpeg',
    title: ''
  },
  {
    src: '/images/final/stange-loch.jpeg',
    title: ''
  },
  {
    src: '/images/final/stange-gewinde.jpeg',
    title: ''
  },
  {
    src: '/images/final/scharnier-beide-offen.jpeg',
    title: ''
  }
];

const showOrderModalFunc = () => {
  if (cartItem.value) {
    showCartModal.value = true;
  } else {
    showOrderModal.value = true;
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScrollPosition < 0) return;
  if (Math.abs(currentScrollPosition - lastScrollPosition.value) < scrollOffset) return;
  showHeader.value = currentScrollPosition < lastScrollPosition.value;
  lastScrollPosition.value = currentScrollPosition;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));

const openVideoModal = (video: string) => {
  currentVideo.value = video;
  showVideoModal.value = true;
}

const openImageModal = (image: string, title: string) => {
  // Find the index of the image in our array
  const index = setupImages.findIndex(img => img?.src === image);
  if (index !== -1) {
    currentImageIndex.value = index;
  }
  
  currentImage.value = image;
  currentImageTitle.value = title;
  showImageModal.value = true;
}

const showNextImage = () => {
  if (currentImageIndex.value < setupImages.length - 1) {
    currentImageIndex.value++;
    const nextImage = setupImages[currentImageIndex.value];
    currentImage.value = nextImage?.src??'';
    currentImageTitle.value = nextImage?.title??'';
  }
}

const showPreviousImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
    const prevImage = setupImages[currentImageIndex.value];
    currentImage.value = prevImage?.src??'';
    currentImageTitle.value = prevImage?.title??'';
  }
}

const closeImageModal = () => {
  showImageModal.value = false;
}
</script>

<style lang="scss">
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.8s ease-out;
}


.custom-text {
  font-family: 'GloriaHallelujah', sans-serif;
}

.custom-text-shadow {
  text-shadow: 2px 2px 3px #2b5544;
}

.custom-box-shadow {
  box-shadow: 2px 2px 3px #2b5544;
}

.-top-full {
  top: -100%;
}

/* Custom styles for Swiper navigation */
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  background-color: rgba(255, 255, 255, 0.8);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

:deep(.swiper-button-prev:after),
:deep(.swiper-button-next:after) {
  font-size: 18px;
  font-weight: bold;
  color: var(--color-primary-500);
}

@media (max-width: 640px) {
  :deep(.swiper-button-prev),
  :deep(.swiper-button-next) {
    width: 30px;
    height: 30px;
  }
  
  :deep(.swiper-button-prev:after),
  :deep(.swiper-button-next:after) {
    font-size: 14px;
  }
}
</style>
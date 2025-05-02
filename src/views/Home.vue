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
        <span class="gloria-hallelujah-regular text-xl lg:text-3xl">{{ $t('Im April') }}</span>
        <span class=" font-bolder text-4xl lg:text-5xl gloria-hallelujah-regular">{{ price - rebate }} €</span>
        <span class="text-sm italic font-normal">{{ $t('0 € Versand') }}</span>
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
          <div>{{ $t('Passt in eine') }} <strong class="text-primary-500">{{ $t('Eurobox') }}</strong> (60x40x30 cm)
          </div>
          <!--          <div>Kein Wackeln, <strong class="text-primary-500">kein Verrutschen</strong></div>-->
          <!--          <div>Wiegt so viel wie ein <strong class="text-primary-500">Bierkasten</strong></div>-->
        </div>
        <!--          {{ $t('Extrem stabil, in 1 Minute auf- und abgebaut, passt perfekt in eine Eurobox (60x40x30 cm) und wiegt so viel wie ne Bierkiste')}}-->
      </div>
      <div class="hidden sm:block flex flex-col items-center justify-center">
        <div @click="showOrderModalFunc" class="gradient-button mb-8 mx-auto w-fit">
          <shopping-cart-icon class="w-6"></shopping-cart-icon>
          <span class="flex flex-col items-center"><span>{{ $t('Jetzt bestellen') }}</span><span class="text-sm italic">{{
              $t('Keine Versandkosten (EU)')
            }}</span></span>
        </div>
        <div @click="showCustomObstacleModalFunc"
             class="gradient-button custom-color from-primarycontrast-500 to-primarycontrast-600 mb-8">
          <wrench-screwdriver-icon class="w-6"></wrench-screwdriver-icon>
          <span>{{ $t('Anfrage für dein Custom-Obstacle') }}</span>
        </div>
      </div>

    </div>
  </section>
  <div class="bg-primarycontrast-500 w-full">
    <section id="features" class="container mx-auto px-4 py-12 max-w-screen-xl text-center relative">
      <div class="absolute top-[-3rem] right-2 sm:right-8 bg-gradient-to-r from-primary-500 to-primary-600 text-white
                    hidden xs:flex md:hidden
                    rotate-12 font-bold rounded-full shadow-lg
                    flex text-center flex-col
                    items-center justify-center z-20 h-28 w-28">
        <span class="gloria-hallelujah-regular text-base">{{ $t('Im April') }}</span>
        <span class=" font-bolder text-xl gloria-hallelujah-regular">{{ price - rebate }} €</span>
        <span class="text-xs italic font-normal">{{ $t('0 € Versand') }}</span>
      </div>
      <div class="absolute top-[-2.5rem] right-1 sm:right-8 bg-gradient-to-r from-primary-500 to-primary-600 text-white
                    flex xs:hidden
                    rotate-12 font-bold rounded-full shadow-lg
                    flex text-center flex-col
                    items-center justify-center z-20 h-24 w-24">
        <span class="gloria-hallelujah-regular text-base">{{ $t('Im April') }}</span>
        <span class=" font-bolder text-xl gloria-hallelujah-regular">{{ price - rebate }} €</span>
      </div>
      <div class="hidden sm:flex justify-center items-center w-full">
        <div @click="showOrderPlanModalFunc"
            class="gradient-button gradient-button-outline custom-color from-primarycontrast-500 to-primarycontrast-600 mb-8 w-fit">
          <wrench-screwdriver-icon class="w-6"></wrench-screwdriver-icon>
          <span>{{ $t('Selbst bauen? Jetzt Pläne bestellen') }}</span>
        </div>
      </div>
      <div class="inline-block sm:hidden flex flex-col items-center mt-4 xs:mt-0">
        <div @click="showOrderModalFunc" class="w-fit gradient-button gradient-button-outline mb-8 w-fit mx-auto">
          <shopping-cart-icon class="w-6"></shopping-cart-icon>
          <span class="flex flex-col items-center"><span>{{ $t('Jetzt bestellen') }}</span><span class="text-sm italic">{{
              $t('Keine Versandkosten (EU)')
            }}</span></span>
        </div>
        <div @click="showOrderPlanModalFunc"
            class="gradient-button gradient-button-outline custom-color from-primarycontrast-500 to-primarycontrast-600 mb-8">
          <wrench-screwdriver-icon class="w-6"></wrench-screwdriver-icon>
          <span>{{ $t('Selbst bauen? Jetzt Pläne bestellen') }}</span>
        </div>
        <div @click="showCustomObstacleModalFunc"
             class="gradient-button gradient-button-outline custom-color from-primarycontrast-500 to-primarycontrast-600 mb-4">
          <wrench-screwdriver-icon class="w-6"></wrench-screwdriver-icon>
          <span>{{ $t('Anfrage für dein Custom-Obstacle') }}</span>
        </div>
      </div>

      <h2 @click="showSetup"
          class="text-center text-textbright text-2xl font-bold flex flex-col w-full items-center justify-center gap-4 mt-4 md:mt-0">
        <span>{{ $t('Warum kostet die Box was sie kostet') }}</span>
      </h2>
      <div class="text-textbright mb-12 mt-4 text-center">
        {{
          $t('Ich bin Andi und skate seit 25 Jahren. Im Winter skaten wir in einem Parkhaus um die Ecke und letztes Jahr kam ich auf die Idee dafür eine portable Ledge zu bauen.')
        }}
        <br><br>
        {{ $t('Ich bin ein Ein-Personen-Unternehmen - Ich entwickle. designe, baue und verpacke jede Ledge selbst. Here eine kleine Übersicht was eine Box kostet:') }}
        <br><br>
        <ul>
          <li><strong>~ 150 €</strong> {{ $t('Materialkosten') }}</li>
          <li><strong>2-3 h</strong> {{ $t('Arbeitszeit pro Box') }}</li>
          <li>~ <strong>30 €</strong> {{ $t('Versand und Verpackungsmaterial') }}</li>
          <li><strong>{{$t('Steuern')}}</strong> {{ $t('(ich bin in Österreich registriert)') }}</li>
        </ul>
        <br>{{ $t('Wenn du bei mir eine Box kaufst, unterstützt du einen kleinen Betrieb, keine Massenproduktion. Ich gestalte meine Preise fair und werde das auch so beibehalten.') }}
      </div>
      <h2 @click="showSetup"
          class="text-center text-textbright text-2xl font-bold flex flex-col w-full items-center justify-center gap-4 mt-8 md:mt-0">
        <span>{{ $t('Aufbau in nur 1 Minute!') }}</span>
        <div class="lg:hidden ">
          <div
              class="outline-button w-fit" @click="showSetup">
            <PlayPauseIcon
                class="w-6"></PlayPauseIcon>
          </div>
        </div>
      </h2>
      <p class="text-center text-textsemibright mb-8 mt-4">
        {{ $t('In nur 1 Minute eine 1,80 m lange Ledge mit 25 cm Höhe skaten, perfekt zum Tricks lernen!') }}</p>
      <div class="flex flex-col lg:flex-row items-center justify-center gap-6">

        <div class="bg-tertiary-200 rounded-lg shadow p-6 flex flex-col items-center w-full max-w-96">
          <div class="relative w-full aspect-[4/3] cursor-pointer hover:opacity-90 transition-opacity group"
               @click="openImageModal('/images/final/transport-hori.jpeg', $t('Transportmodus'))">
            <div class="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse rounded"
                 v-show="!imageLoaded[0]">
              <svg class="w-12 h-12 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <img src="/images/final/transport-43.jpeg"
                 alt="Transportmodus" class="w-full h-full object-cover rounded" @load="imageLoaded[0] = true"
                 :class="{'opacity-0': !imageLoaded[0], 'opacity-100 transition-opacity duration-300': imageLoaded[0]}"></img>
            <div
                class="absolute bottom-2 right-2 bg-primary-500 rounded-full p-2 opacity-0 group-hover:opacity-80 transition-opacity">
              <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3h-6"/>
              </svg>
            </div>
          </div>
          <p class="mt-2 text-center text-textdark font-semibold">{{ $t('Transportmodus') }}</p>
        </div>

        <div class="text-textbright text-3xl font-bold">
          <span class="inline lg:hidden">↓</span>
          <span class="hidden lg:inline">➜</span>
        </div>

        <div class="bg-tertiary-200 rounded-lg shadow p-6 flex flex-col items-center w-full max-w-96">
          <div class="relative w-full aspect-[4/3] cursor-pointer hover:opacity-90 transition-opacity group"
               @click="openImageModal('/images/final/verriegeln-hori.jpeg', $t('Aufklappen & Verriegeln'))">
            <div class="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse rounded"
                 v-show="!imageLoaded[1]">
              <svg class="w-12 h-12 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <img src="/images/final/verriegeln-43.jpeg"
                 alt="Setup" class="w-full h-full object-cover rounded" @load="imageLoaded[1] = true"
                 :class="{'opacity-0': !imageLoaded[1], 'opacity-100 transition-opacity duration-300': imageLoaded[1]}"></img>
            <div
                class="absolute bottom-2 right-2 bg-primary-500 rounded-full p-2 opacity-0 group-hover:opacity-80 transition-opacity">
              <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3h-6"/>
              </svg>
            </div>
          </div>
          <p class="mt-2 text-center text-textdark font-semibold">{{ $t('Aufklappen & Verriegeln') }}</p>
        </div>

        <div class="text-textbright text-3xl font-bold">
          <span class="inline lg:hidden">↓</span>
          <span class="hidden lg:inline">➜</span>
        </div>

        <div class="bg-tertiary-200 rounded-lg shadow p-6 flex flex-col items-center w-full max-w-96">
          <div class="relative w-full aspect-[4/3] cursor-pointer hover:opacity-90 transition-opacity group"
               @click="openImageModal('/images/final/skaten-hori.jpeg', $t('Skaten!'))">
            <div class="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse rounded"
                 v-show="!imageLoaded[2]">
              <svg class="w-12 h-12 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <img src="/images/final/skaten-43.jpeg" alt="Skate"
                 class="w-full h-full object-cover rounded" @load="imageLoaded[2] = true"
                 :class="{'opacity-0': !imageLoaded[2], 'opacity-100 transition-opacity duration-300': imageLoaded[2]}"></img>
            <div
                class="absolute bottom-2 right-2 bg-primary-500 rounded-full p-2 opacity-0 group-hover:opacity-80 transition-opacity">
              <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3h-6"/>
              </svg>
            </div>
          </div>
          <p class="mt-2 text-center text-textdark font-semibold">{{ $t('Skaten!') }}</p>
        </div>

      </div>
      <div class="flex justify-center mt-12">
        <div @click="showSetup" class=" w-fit gradient-button gradient-button-outline ">
          <PlayPauseIcon class="w-6"></PlayPauseIcon>
          <span>{{ $t('Aufbau in Aktion ansehen') }}</span>
        </div>
      </div>
    </section>
  </div>

  <div class="bg-tertiary-200">
    <section id="testimonials" class="container mx-auto px-4 py-16 max-w-screen-xl">

<!--      <testimonials></testimonials>-->

      <h2 class="text-center text-primary-500 text-2xl font-bold mb-8">{{ $t('Noch ein paar Clips') }}</h2>

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
            <div class="bg-white rounded-lg p-6 text-center relative cursor-pointer"
                 @click="openVideoModal('bs-nosegrind-180.mp4')">
              <div class="relative">
                <div class="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse rounded"
                     v-show="!videoLoaded[0]">
                  <svg class="w-12 h-12 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                       viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
                <video class="w-full h-auto rounded" muted loop autoplay @loadeddata="videoLoaded[0] = true"
                       @error="videoError[0] = true"
                       :class="{'opacity-0': !videoLoaded[0], 'opacity-100 transition-opacity duration-300': videoLoaded[0]}">
                  <source src="/images/bs-nosegrind-180.mp4" type="video/mp4">
                </video>
                <div class="absolute inset-0 flex items-center justify-center" v-show="videoLoaded[0]">
                  <div class="bg-primary-500 rounded-full p-3 opacity-80">
                    <PlayPauseIcon class="w-8 h-8 text-white"/>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="bg-white rounded-lg p-6 text-center relative cursor-pointer"
                 @click="openVideoModal('5050-bs-180.mp4')">
              <div class="relative">
                <div class="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse rounded"
                     v-show="!videoLoaded[1]">
                  <svg class="w-12 h-12 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                       viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
                <video class="w-full h-auto rounded" muted loop autoplay @loadeddata="videoLoaded[1] = true"
                       @error="videoError[1] = true"
                       :class="{'opacity-0': !videoLoaded[1], 'opacity-100 transition-opacity duration-300': videoLoaded[1]}">
                  <source src="/images/5050-bs-180.mp4" type="video/mp4">
                </video>
                <div class="absolute inset-0 flex items-center justify-center" v-show="videoLoaded[1]">
                  <div class="bg-primary-500 rounded-full p-3 opacity-80">
                    <PlayPauseIcon class="w-8 h-8 text-white"/>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="bg-white rounded-lg p-6 text-center relative cursor-pointer"
                 @click="openVideoModal('fakie-fs-5050.mp4')">
              <div class="relative">
                <div class="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse rounded"
                     v-show="!videoLoaded[2]">
                  <svg class="w-12 h-12 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                       viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
                <video class="w-full h-auto rounded" muted loop autoplay @loadeddata="videoLoaded[2] = true"
                       @error="videoError[2] = true"
                       :class="{'opacity-0': !videoLoaded[2], 'opacity-100 transition-opacity duration-300': videoLoaded[2]}">
                  <source src="/images/fakie-fs-5050.mp4" type="video/mp4">
                </video>
                <div class="absolute inset-0 flex items-center justify-center" v-show="videoLoaded[2]">
                  <div class="bg-primary-500 rounded-full p-3 opacity-80">
                    <PlayPauseIcon class="w-8 h-8 text-white"/>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>

          <!-- Add the two new videos -->
          <swiper-slide>
            <div class="bg-white rounded-lg p-6 text-center relative cursor-pointer"
                 @click="openVideoModal('bs-5050.mp4')">
              <div class="relative">
                <div class="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse rounded"
                     v-show="!videoLoaded[3]">
                  <svg class="w-12 h-12 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                       viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
                <video class="w-full h-auto rounded" muted loop autoplay @loadeddata="videoLoaded[3] = true"
                       @error="videoError[3] = true"
                       :class="{'opacity-0': !videoLoaded[3], 'opacity-100 transition-opacity duration-300': videoLoaded[3]}">
                  <source src="/images/bs-5050.mp4" type="video/mp4">
                </video>
                <div class="absolute inset-0 flex items-center justify-center" v-show="videoLoaded[3]">
                  <div class="bg-primary-500 rounded-full p-3 opacity-80">
                    <PlayPauseIcon class="w-8 h-8 text-white"/>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="bg-white rounded-lg p-6 text-center relative cursor-pointer"
                 @click="openVideoModal('bs-tailslide.mp4')">
              <div class="relative">
                <div class="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse rounded"
                     v-show="!videoLoaded[4]">
                  <svg class="w-12 h-12 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                       viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
                <video class="w-full h-auto rounded" muted loop autoplay @loadeddata="videoLoaded[4] = true"
                       @error="videoError[4] = true"
                       :class="{'opacity-0': !videoLoaded[4], 'opacity-100 transition-opacity duration-300': videoLoaded[4]}">
                  <source src="/images/bs-tailslide.mp4" type="video/mp4">
                </video>
                <div class="absolute inset-0 flex items-center justify-center" v-show="videoLoaded[4]">
                  <div class="bg-primary-500 rounded-full p-3 opacity-80">
                    <PlayPauseIcon class="w-8 h-8 text-white"/>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>

        <!-- Navigation arrows positioned absolutely outside the slides -->
        <div
            class="swiper-button-prev !absolute !top-1/2 !transform !-translate-y-1/2 !text-primary-500 !opacity-70 hover:!opacity-100 transition-opacity duration-300 !left-0 z-10"></div>
        <div
            class="swiper-button-next !absolute !top-1/2 !transform !-translate-y-1/2 !text-primary-500 !opacity-70 hover:!opacity-100 transition-opacity duration-300 !right-0 z-10"></div>
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
        <p class="text-4xl text-textdark mb-2 flex flex-col justify-center items-center">
          <span class="relative">{{ formatCurrency(price) }} <span
              class="absolute left-0 right-0 top-1/2 border-b border-4"></span></span>
          <span class="text-primary-500 font-extrabold">{{ formatCurrency(discountedPrice) }}</span>
        </p>
        <p class="text-sm mb-6 text-textdark">{{ $t('(inkl. gesetzlicher MwSt)') }}</p>
        <p class="text-textdark italic font-bold text-xl mb-6">{{ $t('Keine Versandkosten innerhalb der EU') }}</p>

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
          {{ $t('Jetzt bestellen') }}
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
              class="outline-button dark w-fit" @click="showSetup"><PlayPauseIcon
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

  <!--  <div class="bg-primarycontrast-500 w-full">-->
  <!--    <section class="container mx-auto px-4 py-12 max-w-screen-xl text-center">-->
  <!--      <h2 class="text-3xl font-extrabold text-textbright mb-12">-->
  <!--        {{ $t('Die Vorteile') }}</h2>-->
  <!--      <div class="grid md:grid-cols-3 gap-8">-->
  <!--        <div class="bg-tertiary-200 rounded-lg shadow p-6">-->
  <!--          <h2 class="text-xl font-bold mb-2 text-primary-500">{{ $t('Modulares Design') }}</h2>-->
  <!--          <p>-->
  <!--            {{ $t('Überall dabei, passt in jeden Kofferraum und sogar auf manche Fahrräder.') }}-->
  <!--          </p>-->
  <!--        </div>-->
  <!--        <div class="bg-tertiary-200 rounded-lg shadow p-6">-->
  <!--          <h2 class="text-xl font-bold mb-2 text-primary-500">{{ $t('Sekundenschneller Aufbau') }}</h2>-->
  <!--          <p>-->
  <!--            {{ $t('Kein Werkzeug, kein Gefummel, einfach ausklappen und in 1 Minute skaten.') }}-->
  <!--          </p>-->
  <!--        </div>-->
  <!--        <div class="bg-tertiary-200 rounded-lg shadow p-6">-->
  <!--          <h2 class="text-xl font-bold mb-2 text-primary-500">{{ $t('Stabile Metallkonstruktion') }}</h2>-->
  <!--          <p>-->
  <!--            {{ $t('Die solide Bauweise aus Stahl sorgt für Stabilität, kein Wackeln, kein Verrutschen.') }}-->
  <!--          </p>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </section>-->
  <!--  </div>-->

  <!--  <div class="bg-tertiary-200">-->
  <!--    <section id="testimonials" class="container mx-auto px-4 py-16 max-w-screen-xl">-->
  <!--      <h2 class="text-center text-primary-500 text-2xl font-bold mb-8">{{ $t('Was unsere Kunden sagen') }}</h2>-->
  <!--      <div class="grid md:grid-cols-3 gap-8">-->

  <!--        <div class="bg-white rounded-lg shadow p-6 text-center">-->
  <!--          <p class="text-textdark italic">-->
  <!--            {{ $t('"PocketLedge ist ein Gamechanger! Super stabil und perfekt für jede Session!') }}</p>-->
  <!--          <p class="mt-4 font-bold text-primary-500">{{ $t('- Max aus Berlin') }}</p>-->
  <!--        </div>-->

  <!--        <div class="bg-white rounded-lg shadow p-6 text-center">-->
  <!--          <p class="text-textdark italic">-->
  <!--            {{ $t('"Ich liebe meine Pocketledge, so schnell aufgebaut und passt locker in mein Lastenrad."') }}</p>-->
  <!--          <p class="mt-4 font-bold text-primary-500">{{ $t('- Lisa aus Wien') }}</p>-->
  <!--        </div>-->

  <!--        <div class="bg-white rounded-lg shadow p-6 text-center">-->
  <!--          <p class="text-textdark italic">-->
  <!--            {{-->
  <!--              $t('"Der Landi isch volle bärig, aber gibt halt keine Ledge. Jetzt bring ich einfach meine Eigene mit"')-->
  <!--            }}</p>-->
  <!--          <p class="mt-4 font-bold text-primary-500">{{ $t('- Chris aus Innsbruck') }}</p>-->
  <!--        </div>-->

  <!--      </div>-->
  <!--    </section>-->
  <!--  </div>-->

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
        <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>

      <img
          :src="currentImage"
          :alt="$t(currentImageTitle)"
          class="max-w-full max-h-[80vh] object-contain min-h-[200px]"
      />

      <button
          v-if="currentImageIndex < setupImages.length - 1"
          @click="showNextImage"
          class="absolute right-8 bg-primary-500 rounded-full p-3 opacity-70 hover:opacity-100 transition-opacity z-10"
      >
        <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
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
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Pagination, Autoplay, Navigation} from 'swiper/modules';
import {computed, onMounted, onUnmounted, ref} from "vue";
import {
  ShoppingCartIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  CheckBadgeIcon,
  VideoCameraIcon,
  PlayPauseIcon,
  WrenchScrewdriverIcon
} from '@heroicons/vue/24/outline'
import useCartStore from "../store/cartStore.ts";
//@ts-ignore
import VideoBackground from 'vue-responsive-video-background-player'
import useModalStore from '../store/modalStore';
import usePreOrderStore from '../store/usePreOrderStore';
import ModalComponent from '../components/ModalComponent.vue';

const {cartItem} = useCartStore();

const {showModal, showContactModal, showOrderModal, showCartModal, showCustomObstacleModalFunc, showOrderPlanModalFunc} = useModalStore();
const {price, rebate} = usePreOrderStore();
const isScrolled = ref(false);
const showHeader = ref(true);
const lastScrollPosition = ref(0);
const scrollOffset = 0;
const showVideoModal = ref(false);
const currentVideo = ref('bs-nosegrind-180.mp4');
const imageLoaded = ref([false, false, false]);
const videoLoaded = ref([false, false, false, false, false]);
const videoError = ref([false, false, false, false, false]);
const discountedPrice = computed(() => price.value - rebate.value);

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

async function showSetup() {
  showModal.value = true;
  await sendVisitorInfo("Setup watched")
}

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
    currentImage.value = nextImage?.src ?? '';
    currentImageTitle.value = nextImage?.title ?? '';
  }
}

const showPreviousImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
    const prevImage = setupImages[currentImageIndex.value];
    currentImage.value = prevImage?.src ?? '';
    currentImageTitle.value = prevImage?.title ?? '';
  }
}

const closeImageModal = () => {
  showImageModal.value = false;
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'}).format(amount);
};

const sendVisitorInfo = async (title: string) => {
  try {
    const userAgent = navigator.userAgent;
    const language = navigator.language;
    const screenSize = `${window.screen.width}x${window.screen.height}`;
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const referrer = document.referrer;

    const visitorInfo = `🔍 ${title}:\n` +
        `📱 Device: ${userAgent}\n` +
        `🌐 Language: ${language}\n` +
        `📺 Screen: ${screenSize}\n` +
        `🕒 Timezone: ${timeZone}\n` +
        `↩️ Referrer: ${referrer || 'Direct visit'}`;

    await fetch('/.netlify/functions/sendTelegramMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({message: visitorInfo})
    });
  } catch (error) {
    console.error('Failed to send visitor info:', error);
  }
};
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
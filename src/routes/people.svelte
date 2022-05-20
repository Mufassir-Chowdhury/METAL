<script>
    let people = [
        {
            'name': 'Zeshan Ahmed Nobin',
            'role': 'Organizer',
            'speciality': 'Team lead, Unit A',
            'about': 'I along with my teammates formed the NMOSS. I also lead the Unit A (computer Architecture) of NMOSS. I\'m really fascinated by the pipelined world of microprocessors. I\'m currently exploring microarchitectural attacks and defenses for my bachelor\'s thesis. I have previous experience of working on an NLP research project regarding Bangla paraphrase identification.',
            'photo': 'nabin.jpg',
            'interests': 'Microarchitectural security, Computer Architecture',
            'linkedin': 'https://www.linkedin.com/in/zeshanahmednobin/',
            'gmail': 'zeshanahmednobin@gmail.com',
            'github': 'https://github.com/NobinPegasus'
        },
        {
            'name': 'Imtiaz Kabir Iftu',
            'speciality': 'Team lead, Unit O',
            'about': 'I am interested in low-level security. I am the team leader of unit O (Operating System Security) and also a member of unit A (Microarchitectural Security). I am currently studying about operating systems security.',
            'photo': 'iftu.jpg',
            'interests': 'Microarchitectural Security and Operating System Security. ',
            'linkedin': 'https://www.linkedin.com/in/imtiaz-kabir-iftu-042b7b225/',
            'gmail': 'imtiaziftu83369@gmail.com',
            'github': 'https://github.com/ImtiazIftu',
            'facebook': 'https://www.facebook.com/imtiaz.iftu/'
    
        },
        {
            'name': 'Mufassir Ahmad Chowdhury',
            'speciality': 'Team lead, Unit N',
            'about': 'I am a CS undergrad student here at SUST. I was a tech enthusiast from a very young age but used to get lost in the rabit holes of the world of technogoloy. Computer security always fascinated me and I decided to join SUST to pursue my dream. I am currently learning Network security and Operating systems and am the leader on unit N (Network team) at NMOSS. Looking forward to make impactful contributions to the world and I can\'t wait for it!',
            'photo': 'mufassir-2.png',
            'interests': 'Network Security, Operating Systems',
            'linkedin': 'https://www.linkedin.com/in/mufassir-chowdhury/',
            'gmail': 'mac22214u@gmail.com',
            'github': 'https://github.com/Mufassir-Chowdhury'
        },
        {
            'name': 'Irfan Nafiz Shahan',
            'speciality': 'Member, Unit A',
            'about': 'I am an undergraduate student of Electrical and Electronic Engineering in Shahjalal University of Science and Technology. I am enthusiastic about multiple fields, driven and conscientious about my responsibilities and yearn to use my knowledge to do whatever good I can do. Currently involved in multiple projects and responsibilities, including being a part of Unit A of NMOSS Labs. I plan to conduct my thesis in Computer Architecture and Hardware Security.',
            'photo': 'irfan-2.jpg',
            'interests': 'Micro-Architectural Security, Hardware Security, Computer Architecture, Cryptography',
            'linkedin': 'https://www.linkedin.com/in/irfannafizshahan/',
            'gmail': 'irfan55@student.sust.edu',
            'github': 'https://github.com/IrfanNafiz'
        },
        {
            'name': 'Al-Mubin Khan Nabil',
            'speciality': 'Member, Unit O',
            'about': 'Im the sort of person whos always looking for a challenge. A challenging road with a meaningful goal is what fuels the soul for me. This pursuit of challenge is what introduced me to Computer science when i was just 11years old through the shelf of computer related books in our school library. The spark that lit at that time, the thrill i found at that time still glows so bright as the first day. This unquenched thirst through the years has led me to explore all sorts of interesting branches of computer science, from game engines, physics engines, networking to robotics, simulation, 3d visualizations and the list goes on, each journey leaving behind colorful new memories to showcase in my cupboard, each journey taking me one step closer to my dream, making me just a little bit more prepared. But throughout every journey Ive always felt a lack, a blistering remoteness from the bigger community of similar minded people,  isolated from the opportunities of the world ahead. So i promised to myself to never let another opportunity pass by, to come out of the shell i used to live in and interact with the world as fluently as i can. After 3 years of that promise, I am happy that i took the decision and my communication skills have escalated dramatically. But i dont plan to just stop there, Its time i introduce myself to the wide world. I have this dream i started cultivating from my high school days, to live in the midst of an enthusiast community, to work with a team full of people who also desperately seek challenge to fuel their soul, to work tirelessly toward something that i can show to the world and proudly say, behold the mark we leave in your lives to remember us by when we grow old and fragile. ',
            'photo': 'nabil.PNG',
            'interests': 'Operating system, Blockchain ',
            'gmail': 'almubinnabil@gmail.com',
            'github': 'https://github.com/NirobNabil',
            'facebook': 'https://www.facebook.com/almubin.nabil/'
        }
    ]
</script>

<main class="w-full p-4 md:p-16 ">
    <div class="text-4xl font-semibold">People</div>
    <section class="md:mx-8 divide-y">   
        {#each people as person}
            <div class="py-8 flex flex-col md:flex-row items-center">
                <img class=" shadow-xl my-4 md:p-0 h-60 md:h-80 w-60 object-cover rounded-lg" src={person.photo} alt="thumbnail">
                <div class=" px-6 w-fit">
                    <div class="text-xl font-semibold ">
                        {person.name}
                    </div>
                    {#if person.role}
                    <div class="text-lg font-semibold text-red-600">
                        {person.role}
                    </div>
                    {/if}
                    <div class="text-lg font-semibold text-blue-600">
                        {person.speciality}
                    </div>
                    <div class="text-gray-500">
                        {person.about}
                    </div>
                    <div class="my-2 text-md font-semibold text-indigo-900">
                        Interests: {person.interests}
                    </div>
                    <div class="flex flex-row">
                        {#if person.linkedin}
                        <a href={person.linkedin}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="mx-2 my-2" x="3px" y="0px"
                            width="24" height="24"
                            viewBox="0 0 24 24"
                            style=" fill:#000000;"><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M9,17H6.5v-7H9V17z M7.7,8.7c-0.8,0-1.3-0.5-1.3-1.2s0.5-1.2,1.4-1.2c0.8,0,1.3,0.5,1.3,1.2S8.6,8.7,7.7,8.7z M18,17h-2.4v-3.8c0-1.1-0.7-1.3-0.9-1.3	s-1.1,0.2-1.1,1.3c0,0.2,0,3.8,0,3.8h-2.5v-7h2.5v1c0.3-0.6,1-1,2.2-1s2.2,1,2.2,3.2V17z"></path></svg>
                        </a>
                        {/if}
                        {#if person.twitter}
                        <a href={person.twitter}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="mx-2 my-2" x="3px" y="0px"
                        width="24" height="24"
                        viewBox="0 0 50 50"
                        style=" fill:#000000;"><path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path></svg>               
                        </a>
                        {/if}
                        {#if person.github}
                        <a href={person.github}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="mx-2 my-2" x="0px" y="0px"
                            width="24" height="24"
                            viewBox="0 0 30 30"
                            style=" fill:#000000;">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path></svg>
                        </a>
                        {/if}
                        {#if person.gmail}
                        <a href={"mailto:"+person.gmail}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-2 my-2" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </a>
                        {/if}
                        {#if person.facebook}
                        <a href={"mailto:"+person.facebook}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="mx-2 my-2" x="0px" y="0px"
                            width="24" height="24"
                            viewBox="0 0 24 24"
                            style=" fill:#000000;"><path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.014467 17.065322 19.313017 13.21875 19.898438 L 13.21875 14.384766 L 15.546875 14.384766 L 15.912109 12.019531 L 13.21875 12.019531 L 13.21875 10.726562 C 13.21875 9.7435625 13.538984 8.8710938 14.458984 8.8710938 L 15.935547 8.8710938 L 15.935547 6.8066406 C 15.675547 6.7716406 15.126844 6.6953125 14.089844 6.6953125 C 11.923844 6.6953125 10.654297 7.8393125 10.654297 10.445312 L 10.654297 12.019531 L 8.4277344 12.019531 L 8.4277344 14.384766 L 10.654297 14.384766 L 10.654297 19.878906 C 6.8702905 19.240845 4 15.970237 4 12 C 4 7.5698774 7.5698774 4 12 4 z"></path></svg>
                        </a>
                        {/if}
                    </div>
                </div>
            </div>   
        {/each}
    </section>
</main>
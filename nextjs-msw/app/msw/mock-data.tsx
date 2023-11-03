import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/posts', () => {
    return HttpResponse.json({
      posts: [
        {
          "id": 1,
          "title": "The Benefits of Meditation",
          "content": "Meditation is a practice that has been around for centuries. It involves training the mind to focus and achieve a state of calmness and relaxation. There are numerous benefits to practicing meditation, including reduced stress, improved concentration, and better sleep. In this blog post, we will explore some of the many benefits of meditation and how it can improve your life.",
          "user_id": 123
        },
        {
          "id": 2,
          "title": 'The Importance of Self-Care',
          "content": "Meditation is a practice that has been around for centuries. It involves training the mind to focus and achieve a state of calmness and relaxation. There are numerous benefits to practicing meditation, including reduced stress, improved concentration, and better sleep. In this blog post, we will explore some of the many benefits of meditation and how it can improve your life.",
          "user_id": 14
        },
        {
          "id": 3,
          "title": "How to Boost Your Productivity and Get More Done in Less Time",
          "content": "Meditation is a practice that has been around for centuries. It involves training the mind to focus and achieve a state of calmness and relaxation. There are numerous benefits to practicing meditation, including reduced stress, improved concentration, and better sleep. In this blog post, we will explore some of the many benefits of meditation and how it can improve your life.",
          "user_id": 124
        },
        {
          "id": 4,
          "title": "The Benefits of a Healthy Lifestyle",
          "content": "Meditation is a practice that has been around for centuries. It involves training the mind to focus and achieve a state of calmness and relaxation. There are numerous benefits to practicing meditation, including reduced stress, improved concentration, and better sleep. In this blog post, we will explore some of the many benefits of meditation and how it can improve your life.",
          "user_id": 125
        },
        {
          "id": 5,
          "title": "The Art of Mindfulness: Techniques for Living in the Present Moment",
          "content": "Meditation is a practice that has been around for centuries. It involves training the mind to focus and achieve a state of calmness and relaxation. There are numerous benefits to practicing meditation, including reduced stress, improved concentration, and better sleep. In this blog post, we will explore some of the many benefits of meditation and how it can improve your life.",
          "user_id": 126
        },
        {
          "id": 6,
          "title": "Overcoming Anxiety: Strategies for Managing Stress and Worry",
          "content": "Meditation is a practice that has been around for centuries. It involves training the mind to focus and achieve a state of calmness and relaxation. There are numerous benefits to practicing meditation, including reduced stress, improved concentration, and better sleep. In this blog post, we will explore some of the many benefits of meditation and how it can improve your life.",
          "user_id": 127
        },
        {
          "id": 7,
          "title": "The Science of Happiness: Understanding What Makes Us Happy",
          "content": "Meditation is a practice that has been around for centuries. It involves training the mind to focus and achieve a state of calmness and relaxation. There are numerous benefits to practicing meditation, including reduced stress, improved concentration, and better sleep. In this blog post, we will explore some of the many benefits of meditation and how it can improve your life.",
          "user_id": 128
        },
        {
          "id": 8,
          "title": "Finding Your Purpose: How to Discover Your Passions and Live a Fulfilling Life",
          "content": "Meditation is a practice that has been around for centuries. It involves training the mind to focus and achieve a state of calmness and relaxation. There are numerous benefits to practicing meditation, including reduced stress, improved concentration, and better sleep. In this blog post, we will explore some of the many benefits of meditation and how it can improve your life.",
          "user_id": 129
        },
        {
          "id": 9,
          "title": "The Benefits of Exercise: Why Physical Activity is Essential for Health and Happiness",
          "content": "Meditation is a practice that has been around for centuries. It involves training the mind to focus and achieve a state of calmness and relaxation. There are numerous benefits to practicing meditation, including reduced stress, improved concentration, and better sleep. In this blog post, we will explore some of the many benefits of meditation and how it can improve your life.",
          "user_id": 130
        },
        {
          "id": 10,
          "title": "The Importance of Gratitude: How to Cultivate a Thankful Attitude",
          "content": "Meditation is a practice that has been around for centuries. It involves training the mind to focus and achieve a state of calmness and relaxation. There are numerous benefits to practicing meditation, including reduced stress, improved concentration, and better sleep. In this blog post, we will explore some of the many benefits of meditation and how it can improve your life.",
          "user_id": 131
        },
        {
          "id": 11,
          "title": "Coping with Grief and Loss: Strategies for Healing and Moving Forward",
          "content": "Meditation is a practice that has been around for centuries. It involves training the mind to focus and achieve a state of calmness and relaxation. There are numerous benefits to practicing meditation, including reduced stress, improved concentration, and better sleep. In this blog post, we will explore some of the many benefits of meditation and how it can improve your life.",
          "user_id": 132
        },
        {
          "id": 12,
          "title": "The Benefits of Meditation",
          "content": "Meditation is a practice that has been around for centuries. It involves training the mind to focus and achieve a state of calmness and relaxation. There are numerous benefits to practicing meditation, including reduced stress, improved concentration, and better sleep. In this blog post, we will explore some of the many benefits of meditation and how it can improve your life.",
          "user_id": 133
        },
        {
          "id": 13,
          "title": "The Benefits of Meditation",
          "content": "Meditation is a practice that has been around for centuries. It involves training the mind to focus and achieve a state of calmness and relaxation. There are numerous benefits to practicing meditation, including reduced stress, improved concentration, and better sleep. In this blog post, we will explore some of the many benefits of meditation and how it can improve your life.",
          "user_id": 134
        },
        {
          "id": 14,
          "title": "The Benefits of Meditation",
          "content": "Meditation is a practice that has been around for centuries. It involves training the mind to focus and achieve a state of calmness and relaxation. There are numerous benefits to practicing meditation, including reduced stress, improved concentration, and better sleep. In this blog post, we will explore some of the many benefits of meditation and how it can improve your life.",
          "user_id": 135
        },
        {
          "id": 15,
          "title": "The Benefits of Meditation",
          "content": "Meditation is a practice that has been around for centuries. It involves training the mind to focus and achieve a state of calmness and relaxation. There are numerous benefits to practicing meditation, including reduced stress, improved concentration, and better sleep. In this blog post, we will explore some of the many benefits of meditation and how it can improve your life.",
          "user_id": 136
        },
        {
          "id": 16,
          "title": "The Benefits of Meditation",
          "content": "Meditation is a practice that has been around for centuries. It involves training the mind to focus and achieve a state of calmness and relaxation. There are numerous benefits to practicing meditation, including reduced stress, improved concentration, and better sleep. In this blog post, we will explore some of the many benefits of meditation and how it can improve your life.",
          "user_id": 137
        },
        {
          "id": 17,
          "title": "The Benefits of Meditation",
          "content": "Meditation is a practice that has been around for centuries. It involves training the mind to focus and achieve a state of calmness and relaxation. There are numerous benefits to practicing meditation, including reduced stress, improved concentration, and better sleep. In this blog post, we will explore some of the many benefits of meditation and how it can improve your life.",
          "user_id": 138
        },
        {
          "id": 18,
          "title": "The Benefits of Meditation",
          "content": "Meditation is a practice that has been around for centuries. It involves training the mind to focus and achieve a state of calmness and relaxation. There are numerous benefits to practicing meditation, including reduced stress, improved concentration, and better sleep. In this blog post, we will explore some of the many benefits of meditation and how it can improve your life.",
          "user_id": 139
        },
        {
          "id": 19,
          "title": "The Benefits of Meditation",
          "content": "Meditation is a practice that has been around for centuries. It involves training the mind to focus and achieve a state of calmness and relaxation. There are numerous benefits to practicing meditation, including reduced stress, improved concentration, and better sleep. In this blog post, we will explore some of the many benefits of meditation and how it can improve your life.",
          "user_id": 140
        },
        {
          "id": 20,
          "title": "The Benefits of Meditation",
          "content": "Meditation is a practice that has been around for centuries. It involves training the mind to focus and achieve a state of calmness and relaxation. There are numerous benefits to practicing meditation, including reduced stress, improved concentration, and better sleep. In this blog post, we will explore some of the many benefits of meditation and how it can improve your life.",
          "user_id": 141
        },
        {
          "id": 21,
          "title": "The Benefits of Meditation",
          "content": "Meditation is a practice that has been around for centuries. It involves training the mind to focus and achieve a state of calmness and relaxation. There are numerous benefits to practicing meditation, including reduced stress, improved concentration, and better sleep. In this blog post, we will explore some of the many benefits of meditation and how it can improve your life.",
          "user_id": 142
        },
        {
          "id": 22,
          "title": "The Benefits of Meditation",
          "content": "Meditation is a practice that has been around for centuries. It involves training the mind to focus and achieve a state of calmness and relaxation. There are numerous benefits to practicing meditation, including reduced stress, improved concentration, and better sleep. In this blog post, we will explore some of the many benefits of meditation and how it can improve your life.",
          "user_id": 143
        },
        {
          "id": 23,
          "title": "The Benefits of Meditation",
          "content": "Meditation is a practice that has been around for centuries. It involves training the mind to focus and achieve a state of calmness and relaxation. There are numerous benefits to practicing meditation, including reduced stress, improved concentration, and better sleep. In this blog post, we will explore some of the many benefits of meditation and how it can improve your life.",
          "user_id": 144
        },
        {
          "id": 24,
          "title": "The Benefits of Meditation",
          "content": "Meditation is a practice that has been around for centuries. It involves training the mind to focus and achieve a state of calmness and relaxation. There are numerous benefits to practicing meditation, including reduced stress, improved concentration, and better sleep. In this blog post, we will explore some of the many benefits of meditation and how it can improve your life.",
          "user_id": 145
        },
        {
          "id": 25,
          "title": "The Benefits of Meditation",
          "content": "Meditation is a practice that has been around for centuries. It involves training the mind to focus and achieve a state of calmness and relaxation. There are numerous benefits to practicing meditation, including reduced stress, improved concentration, and better sleep. In this blog post, we will explore some of the many benefits of meditation and how it can improve your life.",
          "user_id": 146
        },


    ]
    })
  })
]

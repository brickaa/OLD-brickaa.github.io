---
layout: page
title: Posts
permalink: /posts/
---
<div>
  <ul class="posts">
    {% for post in site.posts %}
      <li>
        <div class="post-title">
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}"><h2>{{ post.title }}</h2></a>
          <p class="post-date">{{ post.date | date: "%b %-d, %Y" }}</p>
        </div>
        <div class="post-excerpt">
          {{ post.excerpt }}
        </div>
      </li>
      <hr class="orange">
    {% endfor %}
  </ul>

  <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>
</div>

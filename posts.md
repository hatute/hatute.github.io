---
layout: default
title: Posts
---

<div id="blog" class="wrap">
  {% include blog-quote.html %}

  <div id="tags">
    <ul id="tag-nav">
      <span>Tags:</span>
      {% assign all_tags = site.posts | map: 'tags' | join: ',' | split: ',' | uniq | sort %}
      {% for tag in all_tags %}
        {% if tag != "" %}
          <li><a href="/blog/tags/{{ tag | slugify }}/">{{ tag }}</a></li>
        {% endif %}
      {% endfor %}
    </ul>
  </div>

  <div id="posts" class="section">
    {% for post in site.posts %}
      <div class="post-row">
        <p class="post-title">
            <a class="post-link" href="{{ post.url | relative_url }}">
              {{ post.title | escape }}
            </a>
        </p>
        <p class="post-date">{{ post.date | date:  "%d %B %Y" }}</p>
        {% if post.description %}
        <p class="post-subtitle">{{ post.description }}</p>
        {% endif %}
      </div>
    {% endfor %}
  </div>
</div>

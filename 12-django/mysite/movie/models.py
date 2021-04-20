from django.db import models

CATEGORY_CHOICES = (
    ('A','Action'),
    ('D','Drama'),
    ('C','Comedy'),
    ('R','Romance'),
    ('F','Ficcion'),
)

LANGUAGE_CHOICES = (
    ('EN','English'),
    ('ES','Spanish'),
    ('GR','Germany'),
)

STATUS_CHOICES = (
    ('RA','Recently Added'),
    ('MW','Most Wachet'),
    ('TR','Top Rated'),
)

# Create your models here.

class Movie(models.Model):
    title       = models.CharField(max_length=128)
    description = models.TextField(max_length=256)
    image       = models.ImageField(upload_to='movies')
    category    = models.CharField(choices=CATEGORY_CHOICES, max_length=1)
    language    = models.CharField(choices=LANGUAGE_CHOICES, max_length=2)
    status      = models.CharField(choices=STATUS_CHOICES, max_length=2)
    year        = models.DateField()
    views_count = models.IntegerField(default=0)

    def __str__(self):
        return self.title


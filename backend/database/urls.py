from django.urls import path
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('api/trials', views.all_trials),
    path('api/generate_sequence/<pkey>', views.generate_sequence),
    path('api/post', views.post_trial)
]
urlpatterns = format_suffix_patterns(urlpatterns)
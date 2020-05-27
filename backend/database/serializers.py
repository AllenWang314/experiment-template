from rest_framework import serializers
from .models import trial

class TrialSerializer(serializers.ModelSerializer):
    name = serializers.CharField(max_length=100, required=False)
    meta_data = serializers.ListField(child=serializers.IntegerField(), required=False)
    responses = serializers.ListField(child=serializers.CharField(), required=False)

    class Meta:
        model = trial
        fields = '__all__'

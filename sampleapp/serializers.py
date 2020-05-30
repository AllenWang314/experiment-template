from rest_framework import serializers
from .models import trial

class TrialSerializer(serializers.ModelSerializer):
    name = serializers.CharField(max_length=100, required=False)
    sequence_ids = serializers.ListField(child=serializers.IntegerField(), required=False)
    sequence_1 = serializers.ListField(child=serializers.CharField(), required=False)
    sequence_2 = serializers.ListField(child=serializers.CharField(), required=False)
    sequence_3 = serializers.ListField(child=serializers.CharField(), required=False)
    responses = serializers.ListField(child=serializers.CharField(), required=False)

    class Meta:
        model = trial
        fields = '__all__'

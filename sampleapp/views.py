from django.shortcuts import render
from .models import trial
from rest_framework import status
from rest_framework.decorators import api_view, parser_classes
from rest_framework.response import Response
from .serializers import TrialSerializer
from rest_framework.parsers import JSONParser
from .gen_trials import master_function

@api_view(['GET'])
def generate_sequence(request, pkey, format = None):
	sequence = master_function(int(pkey))
	if request.method == "GET":
		return Response(sequence)
	return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
			
@api_view(['GET', 'POST'])
def all_trials(request, format = None):
	items = trial.objects.all()
	if request.method == "GET":
		serializer = TrialSerializer(items, many=True)
		return Response(serializer.data)
	return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def post_trial(request, format = None):
	if request.method == 'POST':
		serializer = TrialSerializer(trial(), data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		print(serializer.errors)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
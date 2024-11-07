from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def login_check(request):
    return HttpResponse("hello this is phani")
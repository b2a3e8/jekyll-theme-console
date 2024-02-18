---
layout: post
title:  "Using a Pix2Pix GAN Neural Network to Improve Snowy Images"
date:   2022-12-17 12:32:45 +0100
categories: Research_Project
image: images/gan_snow/GANBanner.png
skills: 
---
# Using a Pix2Pix GAN Neural Network to Improve Snowy Images
<!-- Type of Project -->
<div align="center"> Research Project </div>

### Overview
This project was taken on as a the term project for my graduate course in machine/deep learning. My research group proposed an alternative method to snow removal in single images that used a less task specific network architecture than the current state of the art.

A Pix2Pix General Adversarial Network was trained to remove the effects of falling snow from images. Unlike leading methods (DesnowGAN), which rely on specialized snow identification layers, our method employed a general transition map architecture commonly used for tasks like aerial image-to-map transformation.

Our network was trained on the Snow100K dataset, a popular dataset that applies synthetic snow masks to standard images creating snowy image and ground truth pairs.

The approach was effective, with the generalized network achieving a peak signal to noise ratio of 23.2839 and structural similarity index of 0.7697. This does not beat the state of the art DesnowGan but achieved higher scores than other specialized netowrks such as DerainNet, DehazeNet, and DeepLab. 

Our contribution lies in exploring new avenues for weather removal, demonstrating that a general image translation network can achieve competitive performance without task-specific components. 

### Media

### Proficientcies
TensorFlow - Python - Big Data Manipulation - Deep Learning - GAN architetcures - GPU Cluster Resource Scheduling

### Further Readings
* [Git Repo](https://github.com/TankyFranky/Snow_Removal_GAN_ELEC825_Final_Project)
* [Journal style paper](https://github.com/TankyFranky/Snow_Removal_GAN_ELEC825_Final_Project/blob/main/ELEC_825___Final_Project.pdf)
